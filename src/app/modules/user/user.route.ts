import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateStudentRequest } from '../student/student.validation';
import { validateFacultyMember } from '../facultyMember/facultyMember.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(validateStudentRequest.studentValidation),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty-member',
  validateRequest(validateFacultyMember.facultyMemberValidation),
  UserControllers.createFacultyMembers,
);

export const UserRoutes = router;
