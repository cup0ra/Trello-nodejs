import { StatusCodes } from 'http-status-codes';
import { NextFunction, Response, Request } from 'express';
import { logger } from '../middleware/winston';

export class BaseError extends Error {
  constructor(public message: string, public statusCode: StatusCodes) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (
  err: BaseError,
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { statusCode, message } = err;
  const status = err instanceof BaseError ? statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(status).send(message);
  logger.error(message);
  next();
};

export const uncaughtOrUnhandledError = (err: BaseError, value: string): void => {
  logger.error(`${value} ${err.message}`);
  setTimeout(() => process.exit(1), 1000);
};
