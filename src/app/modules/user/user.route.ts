import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateStudentRequest } from '../student/student.validation';
import { validateFacultyMember } from '../facultyMember/facultyMember.validation';
import { validateAdmin } from '../Admin/admin.validation';
import { upload } from '../../utils/uploadImageToCloudinary/uploadImageToCloudinary';

const router = express.Router();

router.post(
  '/create-student',

  upload.single('file'),

  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },

  validateRequest(validateStudentRequest.studentValidation),

  UserControllers.createStudent,
);

router.post(
  '/create-faculty-member',
  validateRequest(validateFacultyMember.facultyMemberValidation),
  UserControllers.createFacultyMembers,
);

router.post(
  '/create-admin',
  validateRequest(validateAdmin.AdminValidation),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
