import { Request, Response, NextFunction } from 'express';
import { ApplicationException } from '../exceptions';
import log from '@logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error: ApplicationException, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      status: error.status || 500,
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  log.error(error.toString());
};

export default errorHandler;
