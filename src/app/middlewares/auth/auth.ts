import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import config from '../../config';
import UserModel from '../../modules/user/user.model';
import onFailure from '../../utils/onFailure/onFailure';

const auth = (...roles: string[]) => {
  const authorize: RequestHandler = async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      // checking if the token is missing
      if (!token) {
        throw new Error('You must login first!');
      }

      // checking if the given token is valid
      const decoded = jwt.verify(
        token,
        config.jwt_acess_token_secret as string,
      ) as JwtPayload;

      const { role, userId } = decoded;

      // checking if the user is exist
      const user = await UserModel.findOne({ id: userId });

      onFailure(user, 'This user is not found !');

      // checking if the user is already deleted

      const isDeleted = user?.isDeleted;

      if (isDeleted) {
        throw new Error('This user is deleted !');
      }

      // checking if the user is blocked
      const userStatus = user?.status;

      if (userStatus === 'blocked') {
        throw new Error('This user is blocked ! !');
      }

      if (roles && !roles.includes(role)) {
        throw new Error('You are not authorized');
      }

      req.user = decoded as JwtPayload;
      next();
    } catch (error) {
      next(error);
    }
  };

  return authorize;
};

export default auth;
