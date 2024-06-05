import { Schema, model } from 'mongoose';
import { TFacultyMember } from './facultyMember.interface';

const facultyMemberSchema = new Schema<TFacultyMember>({
  id: { type: String, required: true, unique: true },
  user: { type: 'ObjectID', required: true, ref: 'user' },
  designation: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  profileImg: { type: String },
  academicDepartment: {
    type: 'ObjectID',
    required: true,
    ref: 'AcademicDepartment',
  },
  isDeleted: { type: Boolean, required: true, default: false },
});

export const FacultyMemberModel = model<TFacultyMember>(
  'FacultyMember',
  facultyMemberSchema,
);
