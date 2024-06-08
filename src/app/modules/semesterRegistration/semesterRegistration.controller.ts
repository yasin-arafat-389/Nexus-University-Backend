import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { SemesterRegistrationServices } from './semesterRegistration.service';

const createSemesterRegistration: RequestHandler = async (req, res, next) => {
  try {
    const result =
      await SemesterRegistrationServices.createSemesterRegistration(req.body);

    sendResponse(res, result, 'Semester is registered succesfully');
  } catch (error) {
    next(error);
  }
};

const getAllSemesterRegistrations: RequestHandler = async (req, res, next) => {
  try {
    const result =
      await SemesterRegistrationServices.getAllSemesterRegistrations(req.query);

    sendResponse(
      res,
      result,
      'Semester Registrations are retrieved successfully!',
    );
  } catch (error) {
    next(error);
  }
};

const getSingleSemesterRegistration: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { id } = req.params;

    const result =
      await SemesterRegistrationServices.getSingleSemesterRegistrations(id);

    sendResponse(
      res,
      result,
      'Semester Registration is retrieved successfully!',
    );
  } catch (error) {
    next(error);
  }
};

const updateSemesterRegistration: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result =
      await SemesterRegistrationServices.updateSemesterRegistrations(
        id,
        req.body,
      );

    sendResponse(
      res,
      result,
      'Semester Registration is retrieved successfully!',
    );
  } catch (error) {
    next(error);
  }
};

const deleteSemesterRegistration: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result =
      await SemesterRegistrationServices.deleteSemesterRegistration(id);

    sendResponse(
      res,
      result,
      'Semester Registration is retrieved successfully!',
    );
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationControllers = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
};
