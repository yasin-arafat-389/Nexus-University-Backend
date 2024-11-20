/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import onFailure from '../../utils/onFailure/onFailure';
import { TAdmin } from './admin.interface';
import { AdminModel } from './admin.model';
import UserModel from '../user/user.model';

const getAllAdmin = async () => {
  const result = await AdminModel.find().populate('user');
  return result;
};

const getSingleAdmin = async (id: string) => {
  const result = await AdminModel.findOne({ id }).populate('user');

  onFailure(result, 'ID not found!!');

  return result;
};

const updateAdmin = async (id: string, payload: Partial<TAdmin>) => {
  const { name, ...remainingAdminData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingAdminData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  const result = await AdminModel.findOneAndUpdate(
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

const deleteAdmin = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    await AdminModel.findOneAndUpdate(
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

export const AdminServices = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
