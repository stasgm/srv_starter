import { Request, Response, NextFunction } from 'express';

import { DataNotFoundException, InvalidParameterException } from '../exceptions';
import Service from '@services/visit.service';
import BaseController from './base.cotroller';

class Controller extends BaseController<Service> {
  constructor() {
    super(new Service());
  }

  public async addOne(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    try {
      const obj = await this.service.findOne(name);

      if (obj) {
        throw new InvalidParameterException('user already exists');
      }

      const item = await this.service.addOne(req.body);

      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const item = await this.service.findOne(id);

      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await this.service.getAll();

      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { item } = req.body;

    try {
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new DataNotFoundException('wrong id');
      }

      await this.service.updateOne(item);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const obj = await this.service.findOne(id);

      if (!obj) {
        throw new DataNotFoundException('wrong id');
      }

      await this.service.deleteOne(id);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
}

export default Controller;
