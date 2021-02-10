import { Request, Response } from 'express';

interface IApiResponse<T = string> {
  error?: string;
  message: string;
  statusCode: number;
  data?: T;
}

interface IRequest<T> extends Request {
  body: T;
}

type IResponse<T> = Response<IApiResponse<T>>;

/* interface IContext<T, U> {
  req: IRequest<T>;
  res: IResponse<U>;
  next: NextFunction;
} */

interface IRead<T> {
  findOne(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}

interface IWrite<T> {
  create(item: T): Promise<string>;
  update(item: T): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IApiResponse, IRequest, IResponse, IRead, IWrite };
