import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse/sendResponse';

const getAllStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudents();

    sendResponse(res, result, 'Students retrieved succesfully');
  } catch (error) {
    next(error);
  }
};

const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.deleteStudent(req.params.studentId);

    sendResponse(res, result, 'Student deleted succesfully');
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudent,
  deleteStudent,
};
