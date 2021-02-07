import Controller from './clinics.controller';
import BaseRoute from '@common/base.route';
import validations from './clinics.validations';
import { IClinic } from '@models/interfaces';

class Route extends BaseRoute<IClinic, Controller> {
  constructor() {
    super('clinics', new Controller(), validations);
  }
}

export default Route;
