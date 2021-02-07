/* eslint-disable @typescript-eslint/no-unsafe-call */
import BaseService from '@common/base.service';
import { Request, Response, NextFunction } from 'express';
import { InvalidParameterException } from '../exceptions';
import { IEntity } from '../models/interfaces';

abstract class BaseController<U extends IEntity = IEntity, T extends BaseService<U> = BaseService<U>> {
  // abstract class BaseController<T extends BaseService = BaseService> {
  protected readonly service: T;

  constructor(service: T) {
    this.service = service;
  }

  public async addOne(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await this.service.addOne(req.body);
      this.created(res, item);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const obj = await this.service.getAll();

      this.ok(res, obj);
    } catch (error) {
      next(error);
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new InvalidParameterException('invalid id');
      }

      this.ok(res, obj);
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new InvalidParameterException('invalid id');
      }

      await this.service.updateOne(req.body);

      this.ok(res);
    } catch (error) {
      next(error);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
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

  public static jsonResponse(res: Response, code: number, message: string | Record<string, unknown>) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: Response, dto?: T) {
    if (dto) {
      // return BaseController.jsonResponse(res, 201, { data: dto });
      return res.status(200).json(dto);
    }
    return res.sendStatus(200).json({});
  }

  public created<T>(res: Response, dto?: T) {
    if (dto) {
      // return BaseController.jsonResponse(res, 201, { data: dto });
      return res.status(200).json(dto);
    }
    return res.sendStatus(201);
  }
}

export default BaseController;
