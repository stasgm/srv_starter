/* eslint-disable @typescript-eslint/no-unsafe-call */
import ReferencesService from './references.service';
import { Request, Response, NextFunction } from 'express';
import { InvalidParameterException } from '../../exceptions';
import BaseController from '../base.cotroller';
import { INamedEntity } from './interfaces';

// eslint-disable-next-line max-len
abstract class ReferencesController<
  U extends INamedEntity = INamedEntity,
  T extends ReferencesService<U> = ReferencesService<U>
> extends BaseController<U, T> {
  constructor(service: T) {
    super(service);
  }

  public async addOne(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    try {
      const obj = await this.service.findByName(name);

      if (obj) {
        throw new InvalidParameterException('object already exists');
      }

      void super.addOne(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}

export default ReferencesController;
