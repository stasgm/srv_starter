import Controller from './persons.controller';
import BaseRoute from '@common/base.route';
import validations from './persons.validations';
import { IPerson } from '@models/interfaces';

class Route extends BaseRoute<IPerson, Controller> {
  constructor() {
    super('persons', new Controller(), validations);
  }
}

export default Route;
