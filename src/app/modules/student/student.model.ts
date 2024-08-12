import mongoose, { Schema } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const UserNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const StudentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true, unique: true },
    user: { type: 'ObjectID', ref: 'user', required: true },
    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
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
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImg: { type: String, default: '' },
    admissionSemester: { type: 'ObjectID', ref: 'AcademicSemester' },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

const StudentModel = mongoose.model<TStudent>('student', StudentSchema);

export default StudentModel;
