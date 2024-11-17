import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateAcademicSemester } from './academicSemester.validation';
import auth from '../../middlewares/auth/auth';

const router = express.Router();

router.post(
  '/create-academic-semester',
  auth('admin'),
  validateRequest(validateAcademicSemester.academicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get(
  '/',
  auth('admin'),
  AcademicSemesterControllers.getAllAcademicSemester,
);

export const AcademicSemesterRoutes = router;
