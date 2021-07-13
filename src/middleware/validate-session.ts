import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JWT_SECRET_KEY } from '../common/conctans-evn';
import { BaseError } from '../common/errorHandler';
import { UNAUTHORIZED } from '../common/statusCodes';
import { User } from '../entity/user.entity';

interface DecodedPayLoad {
  id: string,
  login: string,
}

export const validate = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new BaseError('No token provided.', UNAUTHORIZED);
    const sessiomToken = authorization.split(' ')[1];
    const decoded = jwt.verify(sessiomToken!, JWT_SECRET_KEY!) as DecodedPayLoad;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ id: decoded.id });
    if (!user) throw new BaseError('No user', UNAUTHORIZED);
    next();
  } catch (err) {
    next(new BaseError(err.message, UNAUTHORIZED));
  }
};
