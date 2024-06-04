import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { FacultyMemberServices } from './facultyMember.service';

const getAllFacultyMembers: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyMemberServices.GetAllFacultyMember();

    sendResponse(res, result, 'Faculty Members fetched succesfully');
  } catch (error) {
    next(error);
  }
};

export const FacultyMemberControllers = {
  getAllFacultyMembers,
};
