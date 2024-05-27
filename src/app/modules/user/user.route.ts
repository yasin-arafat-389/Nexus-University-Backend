import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateStudentRequest } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(validateStudentRequest.studentValidation),
  UserControllers.createStudent,
);

export const UserRoutes = router;
