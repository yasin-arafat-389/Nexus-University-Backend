import express from 'express';
import { FacultyMemberControllers } from './facultyMember.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateFacultyMember } from './facultyMember.validation';

const router = express.Router();

router.get('/:id', FacultyMemberControllers.getSingleFacultyMembers);

router.put(
  '/:id',
  validateRequest(validateFacultyMember.facultyMemberUpdateValidation),
  FacultyMemberControllers.updateFacultyMembers,
);

router.delete(
  '/:id',
  validateRequest(validateFacultyMember.facultyMemberUpdateValidation),
  FacultyMemberControllers.deleteFacultyMembers,
);

router.get('/', FacultyMemberControllers.getAllFacultyMembers);

export const FacultyMemberRoutes = router;
