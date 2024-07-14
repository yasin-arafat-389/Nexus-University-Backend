import { RequestHandler } from 'express';
import { AcademicFacultyServices } from './academicFaculty.service';
import sendResponse from '../../utils/sendResponse/sendResponse';

const createAcademicFaculty: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.createAcademicFaculty(
      req.body,
    );

    sendResponse(res, result, 'Faculty Created Successfully!');
  } catch (error) {
    next(error);
  }
};

const getAllAcademicFaculties: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.getAllAcademicFaculties();

    sendResponse(res, result, 'Faculties retrieved Successfully!');
  } catch (error) {
    next(error);
  }
};

const getSingleAcademicFaculty: RequestHandler = async (req, res, next) => {
  try {
    const { facultyId } = req.params;
    const result =
      await AcademicFacultyServices.getSingleAcademicFaculty(facultyId);

    sendResponse(res, result, 'Faculty retrieved Successfully!');
  } catch (error) {
    next(error);
  }
};

const updateAcademicFaculty: RequestHandler = async (req, res, next) => {
  try {
    const { facultyId } = req.params;
    const result = await AcademicFacultyServices.updateAcademicFaculty(
      facultyId,
      req.body,
    );

    sendResponse(res, result, 'Faculty updated Successfully!');
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
