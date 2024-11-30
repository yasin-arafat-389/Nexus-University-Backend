import express from 'express';
import auth from '../../middlewares/auth/auth';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { EnrolledCourseValidations } from './enrolledCourse.validaton';
import { enrolledCourseControllers } from './enrolledCourse.controller';

const router = express.Router();

router.post(
  '/create-enrolled-course',
  auth('student'),
  validateRequest(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema,
  ),
  enrolledCourseControllers.createEnrolledCourse,
);

router.patch(
  '/update-enrolled-course-marks',
  auth('faculty'),
  validateRequest(
    EnrolledCourseValidations.updateEnrolledCourseMarksValidationZodSchema,
  ),
  enrolledCourseControllers.updateEnrolledCourseMarks,
);

export const EnrolledCourseRoutes = router;
