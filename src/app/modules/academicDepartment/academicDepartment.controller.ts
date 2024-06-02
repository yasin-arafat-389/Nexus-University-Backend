import { RequestHandler } from 'express';
import { AcademicDepartmentServices } from './academicDepartment.service';
import sendResponse from '../../utils/sendResponse/sendResponse';

const createAcademicDepartmemt: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicDepartmentServices.createAcademicDepartment(
      req.body,
    );

    sendResponse(res, result, 'Department created succesfully');
  } catch (error) {
    next(error);
  }
};

const getAllAcademicDepartments: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicDepartmentServices.getAllAcademicDepartment();

    sendResponse(res, result, 'Departments retrieved succesfully');
  } catch (error) {
    next(error);
  }
};

const getSingleAcademicDepartment: RequestHandler = async (req, res, next) => {
  try {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServices.getSingleAcademicDepartment(
        departmentId,
      );
    sendResponse(res, result, 'Department retrieved succesfully');
  } catch (error) {
    next(error);
  }
};

const updateAcademicDeartment: RequestHandler = async (req, res, next) => {
  try {
    const { departmentId } = req.params;
    const result = await AcademicDepartmentServices.updateAcademicDepartment(
      departmentId,
      req.body,
    );
    sendResponse(res, result, 'Department updated succesfully');
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentControllers = {
  createAcademicDepartmemt,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDeartment,
};
