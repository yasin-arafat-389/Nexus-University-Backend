import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { UserServices } from './user.service';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;
    const result = await UserServices.createStudent(password, student);

    sendResponse(res, result, 'Student is created succesfully');
  } catch (error) {
    next(error);
  }
};

const createFacultyMembers: RequestHandler = async (req, res, next) => {
  try {
    const { password, facultyMember } = req.body;
    const result = await UserServices.createFacultyMember(
      password,
      facultyMember,
    );

    sendResponse(res, result, 'Faculty Member created succesfully');
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
  createFacultyMembers,
};
