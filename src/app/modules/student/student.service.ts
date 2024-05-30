import mongoose from 'mongoose';
import StudentModel from './student.model';
import UserModel from '../user/user.model';

const deleteStudent = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await StudentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new Error('Failed to delete student!');
    }

    const deletedUser = await UserModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new Error('Failed to delete user!');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};

const getAllStudents = async () => {
  const result = await StudentModel.find()
    .populate('user')
    .populate('admissionSemester');

  return result;
};

export const StudentServices = {
  getAllStudents,
  deleteStudent,
};
