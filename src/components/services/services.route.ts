import Controller from './services.controller';
import BaseRoute from '@common/base.route';
import validations from './services.validations';
import { IService } from '@models/interfaces';

class Route extends BaseRoute<IService, Controller> {
  constructor() {
    super('services', new Controller(), validations);
  }

  /*   protected routes(): void {
    this.api.get('/', this.controller.findAll.bind(this.controller));
    this.api.post('/', celebrate(validations.add), this.controller.addOne.bind(this.controller));
    this.api.get('/:id', this.controller.findOne.bind(this.controller));
    this.api.patch('/:id', celebrate(validations.patch), this.controller.updateOne.bind(this.controller));
    this.api.delete('/:id', this.controller.deleteOne.bind(this.controller));
  } */
}

export default Route;
