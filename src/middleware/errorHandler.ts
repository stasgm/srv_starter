import { NextFunction, Request, Response } from 'express';
import { ApplicationException } from '../exceptions';
import log from '@logger';
import { IApiResponse } from '../models/interfaces';
// import { isCelebrateError } from 'celebrate';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error: ApplicationException, req: Request, res: Response, next: NextFunction) => {
  /*   if (isCelebrateError(error)) {
    const err = Object.assign({}, error);

    if (err.details) {
      err.message = JSON.stringify(err.details);
    }

    return next(err);
  }
 */
  const result: IApiResponse = {
    statusCode: error.status || 500,
    error: error.name,
    message: error.message,
  };

  res.status(error.status || 500).json(result);
  /*   res.json({
    statusCode: error.status || 500,
    error: {
      message: error.message,
    },
  }); */

  log.error(error.toString());
};

export default errorHandler;
