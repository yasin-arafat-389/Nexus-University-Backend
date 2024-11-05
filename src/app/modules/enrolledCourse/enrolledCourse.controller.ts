import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { EnrolledCourseServices } from './enrolledCourse.service';

const createEnrolledCourse: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const result = await EnrolledCourseServices.createEnrolledCourseIntoDB(
      userId,
      req.body,
    );

    sendResponse(res, result, 'Student is enrolled succesfully');
  } catch (error) {
    next(error);
  }
};

const updateEnrolledCourseMarks: RequestHandler = async (req, res, next) => {
  try {
    const facultyId = req.user.userId;
    const result = await EnrolledCourseServices.updateEnrolledCourseMarksIntoDB(
      facultyId,
      req.body,
    );

    sendResponse(res, result, 'Marks has been updated succesfully');
  } catch (error) {
    next(error);
  }
};

export const enrolledCourseControllers = {
  createEnrolledCourse,
  updateEnrolledCourseMarks,
};
