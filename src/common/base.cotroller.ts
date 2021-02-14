import BaseService from '@common/base.service';
import { NextFunction, Response } from 'express';
import { InvalidParameterException } from '../exceptions';
import { IEntity } from '../models/interfaces';
import BaseMapper from './base.mapper';
import { IApiResponse, IRequest, IResponse } from './interfaces';

abstract class BaseController<U extends IEntity = IEntity, T extends BaseService<U> = BaseService<U>> {
  protected readonly service: T;
  protected readonly mapper: BaseMapper<U>;

  constructor(service: T, mapper: BaseMapper<U>) {
    this.service = service;
    this.mapper = mapper;
  }

  public async addOne(req: IRequest<U>, res: IResponse<string>, next: NextFunction) {
    try {
      const obj = await this.mapper.mapToNewObject(req.body);
      const item = await this.service.addOne(obj);
      this.created(res, item);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: IRequest<U>, res: IResponse<Partial<U>>, next: NextFunction) {
    try {
      const obj = await this.service.getAll();

      this.ok(res, obj);
    } catch (error) {
      next(error);
    }
  }

  public async findOne(req: IRequest<U>, res: IResponse<Partial<U>>, next: NextFunction) {
    try {
      const { id } = req.params;
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new InvalidParameterException('invalid id');
      }

      this.ok(res, obj);
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(req: IRequest<U>, res: IResponse<void>, next: NextFunction) {
    try {
      const { id } = req.params;
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new InvalidParameterException('invalid id');
      }

      await this.service.updateOne({ ...obj, ...req.body });

      this.ok(res);
    } catch (error) {
      next(error);
    }
  }

  public async deleteOne(req: IRequest<U>, res: IResponse<void>, next: NextFunction) {
    try {
      const { id } = req.params;
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new InvalidParameterException('invalid id');
      }

      await this.service.deleteOne(id);

      this.ok(res);
    } catch (error) {
      next(error);
    }
  }

  public static jsonResponse<T>(res: Response, resp: IApiResponse<T>) {
    return res.status(resp.statusCode).json(resp);
  }

  public ok<T>(res: Response, dto?: T) {
    const resp: IApiResponse<T> = {
      statusCode: 200,
      message: 'ok',
    };

    if (dto) {
      resp.data = dto;
    }

    return BaseController.jsonResponse(res, resp);
  }

  public created<T>(res: Response, dto?: T) {
    const resp: IApiResponse<T> = {
      statusCode: 201,
      message: 'successfully created',
    };

    if (dto) {
      resp.data = dto;
    }

    return BaseController.jsonResponse(res, resp);
  }
}

export default BaseController;
