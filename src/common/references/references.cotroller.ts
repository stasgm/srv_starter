import ReferencesService from './references.service';
import { InvalidParameterException } from '../../exceptions';
import BaseController from '../base.cotroller';
import { INamedEntity } from './interfaces';
import { IRequest, IResponse } from '../interfaces';
import { NextFunction } from 'express';

abstract class ReferencesController<
  U extends INamedEntity = INamedEntity,
  T extends ReferencesService<U> = ReferencesService<U>
  > extends BaseController<U, T> {
  constructor(service: T) {
    super(service);
  }

  public async addOne(req: IRequest<U>, res: IResponse<Partial<U>>, next: NextFunction) {
    try {
      const { name } = req.body;
      const obj = await this.service.findByName(name);

      if (obj) {
        throw new InvalidParameterException('object already exists');
      }

      await super.addOne(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}

export default ReferencesController;
