import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { OfferedCourseServices } from './offeredCourse.service';

const createOfferedCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.createOfferedCourse(req.body);

    sendResponse(res, result, 'Offered Course is created succesfully');
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.getAllOfferedCourses(req.query);

    sendResponse(res, result, 'Offered Courses retrieved successfully !');
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourse: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OfferedCourseServices.getSingleOfferedCourse(id);

    sendResponse(res, result, 'Offered Course retrieved successfully !');
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourse: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await OfferedCourseServices.updateOfferedCourse(
      id,
      req.body,
    );

    sendResponse(res, result, 'Offered Course updated successfully !');
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourse: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await OfferedCourseServices.deleteOfferedCourse(id);

    sendResponse(res, result, 'Offered Course deleted successfully !');
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseControllers = {
  createOfferedCourse,
  getAllOfferedCourse,
  getSingleOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourse,
};
