import { RequestHandler } from 'express';
import { AcademicSemesterServices } from './academicSemester.service';
import sendResponse from '../../utils/sendResponse/sendResponse';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.createAcademicSemester(
      req.body,
    );

    sendResponse(res, result, 'Academic semester is created succesfully');
  } catch (error) {
    next(error);
  }
};

const getAllAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.getAllAcademicSemester();

    sendResponse(res, result, 'Academic semesters retrieved succesfully');
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
};
