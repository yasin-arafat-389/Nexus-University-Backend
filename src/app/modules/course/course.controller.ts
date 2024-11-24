import { RequestHandler } from 'express';
import { CourseServices } from './course.service';
import sendResponse from '../../utils/sendResponse/sendResponse';

const createCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.createCourseIntoDB(req.body);

    sendResponse(res, result, 'Course is created succesfully');
  } catch (error) {
    next(error);
  }
};

const getAllCourses: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.getAllCoursesFromDB(req.query);

    sendResponse(res, result, 'Courses retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const getSingleCourse: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.getSingleCourseFromDB(id);

    sendResponse(res, result, 'Course retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const updateCourse: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.updateCourseIntoDB(id, req.body);

    sendResponse(res, result, 'Course updated successfully');
  } catch (error) {
    next(error);
  }
};

const deleteCourse: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.deleteCourseFromDB(id);

    sendResponse(res, result, 'Course deleted successfully');
  } catch (error) {
    next(error);
  }
};

const assignFacultiesWithCourse: RequestHandler = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { faculties } = req.body;

    const result = await CourseServices.assignFacultiesWithCourseIntoDB(
      courseId,
      faculties,
    );

    sendResponse(res, result, 'Faculties assigned  succesfully');
  } catch (error) {
    next(error);
  }
};

const removeFacultiesFromCourse: RequestHandler = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { faculties } = req.body;

    const result = await CourseServices.removeFacultiesFromCourseFromDB(
      courseId,
      faculties,
    );

    sendResponse(res, result, 'Faculties removed  succesfully');
  } catch (error) {
    next(error);
  }
};

export const CourseControllers = {
  createCourse,
  getSingleCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  assignFacultiesWithCourse,
  removeFacultiesFromCourse,
};
