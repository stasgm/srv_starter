import { celebrate } from 'celebrate'
import Controller from '@controllers/visit.controller';
import BaseRoute from './base.route';
import validations from '@validations/visit.validations';

class Route extends BaseRoute<Controller> {
  constructor() {
    super('visits', new Controller());
  }

  protected routes(): void {
    this.api.get('/', this.controller.findAll.bind(this.controller));
    this.api.post('/', celebrate(validations.add), this.controller.addOne.bind(this.controller));
    this.api.get('/:id', this.controller.findOne.bind(this.controller));
    this.api.patch('/:id', celebrate(validations.patch), this.controller.updateOne.bind(this.controller));
    this.api.delete('/:id', this.controller.deleteOne.bind(this.controller));
  }
}

export default Route;
