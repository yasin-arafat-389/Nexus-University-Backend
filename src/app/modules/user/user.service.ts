import config from '../../config';
import { TStudent } from '../student/student.interface';
import StudentModel from '../student/student.model';
import { TUser } from './user.interface';
import UserModel from './user.model';

const createStudent = async (password: string, studentData: TStudent) => {
  const user: Partial<TUser> = {};

  user.password = password || (config.default_pass as string);
  user.role = 'student';
  user.id = '2030010001';

  const newUser = await UserModel.create(user);

  if (newUser) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudent,
};
