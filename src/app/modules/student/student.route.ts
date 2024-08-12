import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateStudentRequest } from './student.validation';

const router = express.Router();

router.get('/', StudentControllers.getAllStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.patch(
  '/:studentId',
  validateRequest(validateStudentRequest.studentUpdateValidation),
  StudentControllers.updateStudent,
);

export const StudentRoutes = router;
