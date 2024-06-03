import mongoose from 'mongoose';
import { TFacultyMember } from './facultyMember.interface';

const facultyMembersSchema = new mongoose.Schema<TFacultyMember>(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    user: {
      type: 'ObjectID',
      required: true,
      ref: 'user',
    },
    academicDepartment: {
      type: 'ObjectID',
      required: true,
      ref: 'AcademicDepartment',
    },
  },
  {
    timestamps: true,
  },
);

const FacultyMemberModel = mongoose.model<TFacultyMember>(
  'facultyMember',
  facultyMembersSchema,
);

export default FacultyMemberModel;
