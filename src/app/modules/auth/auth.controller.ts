import { RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse/sendResponse';
import { AuthServices } from './auth.service';
import config from '../../config';

const login: RequestHandler = async (req, res, next) => {
  try {
    const result = await AuthServices.login(req.body);
    const { refreshToken, accessToken, needsPasswordChange } = result;

    res.cookie('refreshToken', refreshToken, {
      secure: config.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    sendResponse(res, { accessToken, needsPasswordChange }, 'Login Successful');
  } catch (error) {
    next(error);
  }
};

const refreshToken: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const result = await AuthServices.refreshToken(refreshToken);

    sendResponse(res, result, 'Refresh Token created Successfully');
  } catch (error) {
    next(error);
  }
};

const forgetPassword: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.body.id;
    const result = await AuthServices.forgetPassword(userId);

    sendResponse(res, result, 'Reset link is generated succesfully!');
  } catch (error) {
    next(error);
  }
};

const resetPassword: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization as string;

    const result = await AuthServices.resetPassword(req.body, token);

    sendResponse(res, result, 'Password reset succesful!');
  } catch (error) {
    next(error);
  }
};

export const AuthControllers = {
  login,
  refreshToken,
  forgetPassword,
  resetPassword,
};
