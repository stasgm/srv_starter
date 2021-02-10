import { NextFunction, Request, Response } from 'express';
import { ApplicationException } from '../exceptions';
import log from '@logger';
import { IApiResponse } from '../common/interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error: ApplicationException, req: Request, res: Response, next: NextFunction) => {
  const result: IApiResponse = {
    statusCode: error.status || 500,
    error: error.name,
    message: error.message || 'unknown error',
  };

  res.status(error.status || 500).json(result);

  log.error(error.toString());
};

export default errorHandler;
