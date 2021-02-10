import Controller from './visits.controller';
import BaseRoute from '@common/base.route';
import validations from './visits.validations';
import { IVisit } from '@models/interfaces';

class Route extends BaseRoute<IVisit, Controller> {
  constructor() {
    super('visits', new Controller(), validations);
  }
}

export default Route;
