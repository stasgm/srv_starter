import { Request, Response, NextFunction } from 'express';

import { InvalidParameterException } from '../exceptions';
import { ListService } from '@services/lists';
import { BaseController } from './base.cotroller';

class ListController extends BaseController<ListService> {
  constructor() {
    super(new ListService());
  }

  public async addOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      if (!name) {
        throw new InvalidParameterException('name is required');
      }

      const user = await this.service.findOne(name);

      if (user) {
        //TODO переделать в exception
        res.status(400).json({ error: 'User already exists' });
      }

      const listObj = await this.service.addOne(req.body);

      res.status(201).json(listObj);
    } catch (error) {
      next(error);
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      if (!id) {
        throw new InvalidParameterException(': /api/v1/list/:id - id is required');
      }

      const itemObj = await this.service.findOne(id);

      res.status(200).json(itemObj);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const listsObj = await this.service.getAll();

      res.status(200).json(listsObj);
    } catch (error) {
      next(error);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { ...item } = req.body;

    try {
      if (!id) {
        throw new InvalidParameterException(': /api/v1/list/:id - id is required');
      }

      await this.service.updateOne(item);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      await this.service.deleteOne(id);

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
}

export default ListController;
