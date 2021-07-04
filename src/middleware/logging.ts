import { NextFunction, Request, Response } from 'express';
import { finished } from 'stream';
import { logger } from './winston';

export const loggers = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, body, query } = req;
  const start = Date.now();
  const queryStr = Object.keys(query).length ? `QUERY: ${JSON.stringify(query)}` : '';
  const bodyStr = Object.keys(body).length ? `BODY: ${JSON.stringify(body)}` : '';
  next();
  finished(req, async () => {
    const ms = Date.now() - start;
    const message = `[REQUEST] | ${method} | ${url} | ${queryStr} ${bodyStr} [${ms}ms]`;
    logger.info(message);
  });
  finished(res, async () => {
    const ms = Date.now() - start;
    const { statusCode, statusMessage } = res;
    const message = `[RESPONSE] | ${statusCode} | ${statusMessage}  [${ms}ms]`;
    logger.info(message);
  });
};
