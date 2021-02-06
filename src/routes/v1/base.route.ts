import { Router } from 'express';
import { BaseController } from '../../controllers/base.cotroller';

export abstract class BaseRoute<T extends BaseController = BaseController> {
  protected api: Router = Router();
  protected readonly controller: T;
  protected readonly name: string;

  constructor(name: string, controller: T) {
    this.name = name;
    this.controller = controller;
    this.routes();
  }

  public getName() {
    return this.name;
  }

  public getApi(): Router {
    return this.api;
  }

  protected abstract routes(): void;
}
