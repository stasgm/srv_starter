import { BaseService } from '@services/base.service';

export abstract class BaseController<T extends BaseService = BaseService> {
  protected readonly service: T;

  constructor(service: T) {
    this.service = service;
  }
}
