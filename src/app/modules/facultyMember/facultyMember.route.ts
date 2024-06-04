import express from 'express';
import { FacultyMemberControllers } from './facultyMember.controller';

const router = express.Router();

router.get('/', FacultyMemberControllers.getAllFacultyMembers);

export const FacultyMemberRoutes = router;
