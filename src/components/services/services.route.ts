import Controller from './services.controller';
import BaseRoute from '@common/base.route';
import validations from './services.validations';
import { IService } from '@models/interfaces';

class Route extends BaseRoute<IService, Controller> {
  constructor() {
    super('services', new Controller(), validations);
  }
}

export default Route;
