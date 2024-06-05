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

const getSingleFacultyMembers: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyMemberServices.GetSingleFacultyMember(
      req.params.id,
    );

    sendResponse(res, result, 'Faculty Member fetched succesfully');
  } catch (error) {
    next(error);
  }
};

const updateFacultyMembers: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyMemberServices.UpdateFacultyMember(
      req.params.id,
      req.body,
    );

    sendResponse(res, result, 'Faculty Member updated succesfully');
  } catch (error) {
    next(error);
  }
};

const deleteFacultyMembers: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyMemberServices.DeleteFacultyMember(
      req.params.id,
    );

    sendResponse(res, result, 'Faculty Member deleted succesfully');
  } catch (error) {
    next(error);
  }
};

export const FacultyMemberControllers = {
  getAllFacultyMembers,
  getSingleFacultyMembers,
  updateFacultyMembers,
  deleteFacultyMembers,
};
