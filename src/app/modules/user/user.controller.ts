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

export const UserControllers = {
  createStudent,
};
