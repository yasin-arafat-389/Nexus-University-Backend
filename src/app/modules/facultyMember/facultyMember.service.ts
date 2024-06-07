/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import onFailure from '../../utils/onFailure/onFailure';
import { TFacultyMember } from './facultyMember.interface';
import { FacultyMemberModel } from './facultyMember.model';
import UserModel from '../user/user.model';

const GetAllFacultyMember = async () => {
  const result = await FacultyMemberModel.find()
    .populate('user')
    .populate('academicDepartment');
  return result;
};

const GetSingleFacultyMember = async (id: string) => {
  const result = await FacultyMemberModel.findOne({ id })
    .populate('user')
    .populate('academicDepartment');
  return result;
};

const UpdateFacultyMember = async (
  id: string,
  payload: Partial<TFacultyMember>,
) => {
  const { name, ...remainingFacultyMemberData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingFacultyMemberData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  console.log(id);
  console.log(payload);

  const result = await FacultyMemberModel.findOneAndUpdate(
    { id },
    modifiedUpdatedData,
    {
      new: true,
      runValidators: true,
    },
  );

  onFailure(result, 'ID not found!!');
  return result;
};

const DeleteFacultyMember = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    await FacultyMemberModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      {
        new: true,
        session,
        runValidators: true,
      },
    );

    const result = await UserModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      {
        new: true,
        session,
        runValidators: true,
      },
    );

    onFailure(result, 'ID not found!!');

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const FacultyMemberServices = {
  GetAllFacultyMember,
  GetSingleFacultyMember,
  UpdateFacultyMember,
  DeleteFacultyMember,
};
