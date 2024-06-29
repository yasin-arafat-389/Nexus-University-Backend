/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import config from '../../config';
import { generateStudentId } from '../../utils/generateStudentId/generateStudentId';
import AcademicSemesterModel from '../academicSemeter/academicSemeter.model';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { TAcademicSemester } from '../academicSemeter/academicSemeter.iterface';
import UserModel from './user.model';
import StudentModel from '../student/student.model';
import { TFacultyMember } from '../facultyMember/facultyMember.interface';
import { generateFacultyMemberId } from '../../utils/generateFacultyMemberId/generateFacultyMemberId';
import { FacultyMemberModel } from '../facultyMember/facultyMember.model';
import onFailure from '../../utils/onFailure/onFailure';
import { TAdmin } from '../Admin/admin.interface';
import { AdminModel } from '../Admin/admin.model';
import { generateAdminId } from '../../utils/generateAdminId/generateAdminId';
import {
  TCloudinaryResponse,
  uploadImageToCloudinary,
} from '../../utils/uploadImageToCloudinary/uploadImageToCloudinary';

const createStudent = async (
  file: any,
  password: string,
  payload: TStudent,
) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'student';
  userData.email = payload.email;

  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemester,
    );

    if (file) {
      const imageName = `${userData.id}-${payload?.name?.firstName}`;
      const path = file?.path;
      //send image to cloudinary
      const { secure_url } = (await uploadImageToCloudinary(
        imageName,
        path,
      )) as TCloudinaryResponse;

      payload.profileImg = secure_url;
    }

    const newUser = await UserModel.create([userData], { session });

    if (!newUser.length) {
      throw new Error('Failed to create user!');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newStudent = await StudentModel.create([payload], { session });

    if (!newStudent.length) {
      throw new Error('Failed to create student!');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }
};

const createFacultyMember = async (
  password: string,
  facultyMember: TFacultyMember,
) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'faculty';
  userData.email = facultyMember.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generateFacultyMemberId();

    const newUser = await UserModel.create([userData], { session });

    onFailure(newUser, 'Failed to create user');

    facultyMember.id = newUser[0].id;
    facultyMember.user = newUser[0]._id;

    const newFaculty = await FacultyMemberModel.create([facultyMember], {
      session,
    });

    onFailure(newFaculty, 'Failed to create faculty');

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createAdmin = async (password: string, adminData: TAdmin) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'admin';
  userData.email = adminData.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generateAdminId();

    const newUser = await UserModel.create([userData], { session });

    onFailure(newUser, 'Failed to create user');

    adminData.id = newUser[0].id;
    adminData.user = newUser[0]._id;

    const newAdmin = await AdminModel.create([adminData], {
      session,
    });

    onFailure(newAdmin, 'Failed to create admin');

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createStudent,
  createFacultyMember,
  createAdmin,
};
