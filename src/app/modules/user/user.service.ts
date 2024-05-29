import mongoose from 'mongoose';
import config from '../../config';
import { generateStudentId } from '../../utils/generateStudentId/generateStudentId';
import AcademicSemesterModel from '../academicSemeter/academicSemeter.model';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { TAcademicSemester } from '../academicSemeter/academicSemeter.iterface';
import UserModel from './user.model';
import StudentModel from '../student/student.model';

const createStudent = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'student';

  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemester,
    );

    const newUser = await UserModel.create([userData], { session }); // array

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

export const UserServices = {
  createStudent,
};
