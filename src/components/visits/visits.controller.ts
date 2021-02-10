/* import { Request, Response, NextFunction } from 'express';
import { DataNotFoundException, InvalidParameterException } from '../../exceptions'; */
import Service from './visits.service';
import BaseController from '@common/base.cotroller';
import { IVisit } from '@models/interfaces';

class Controller extends BaseController<IVisit, Service> {
  constructor() {
    super(new Service());
  }
}

export default Controller;
