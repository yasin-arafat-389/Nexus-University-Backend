import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { AdminServices } from './admin.service';

const getAllAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminServices.getAllAdmin();

    sendResponse(res, result, 'Admins fetched succesfully');
  } catch (error) {
    next(error);
  }
};

const getSingleAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminServices.getSingleAdmin(req.params.id);

    sendResponse(res, result, 'Admin fetched succesfully');
  } catch (error) {
    next(error);
  }
};

const updateAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminServices.updateAdmin(req.params.id, req.body);

    sendResponse(res, result, 'Admin updated succesfully');
  } catch (error) {
    next(error);
  }
};

const deleteAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminServices.deleteAdmin(req.params.id);

    sendResponse(res, result, 'Admin deleted succesfully');
  } catch (error) {
    next(error);
  }
};

export const AdminControllers = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
