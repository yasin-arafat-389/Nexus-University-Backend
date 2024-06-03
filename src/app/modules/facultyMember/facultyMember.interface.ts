import { Types } from 'mongoose';

export type TFacultyMember = {
  name: string;
  id: string;
  user: Types.ObjectId;
  academicDepartment: Types.ObjectId;
};
