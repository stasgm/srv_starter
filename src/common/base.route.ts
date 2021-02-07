import { celebrate } from 'celebrate';
import { Router } from 'express';
import { IEntity, IValidation } from '@models/interfaces';
import BaseController from './base.cotroller';

abstract class BaseRoute<U extends IEntity, T extends BaseController<U> = BaseController<U>> {
  protected api: Router = Router();
  protected readonly controller: T;
  protected readonly validation: IValidation;
  protected readonly name: string;

  constructor(name: string, controller: T, validation: IValidation) {
    this.name = name;
    this.controller = controller;
    this.validation = validation;
    this.routes();
  }

  public getName() {
    return `/${this.name}`;
  }

  public getApi(): Router {
    return this.api;
  }

  protected routes(): void {
    this.api.get('/', this.controller.findAll.bind(this.controller));
    this.api.post('/', celebrate(this.validation.add), this.controller.addOne.bind(this.controller));
    this.api.get('/:id', this.controller.findOne.bind(this.controller));
    this.api.patch('/:id', celebrate(this.validation.patch), this.controller.updateOne.bind(this.controller));
    this.api.delete('/:id', this.controller.deleteOne.bind(this.controller));
  }
}

export default BaseRoute;
