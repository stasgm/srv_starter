import ListController from '@controllers/list';
import { BaseRoute } from './base.route';

class ListRoute extends BaseRoute<ListController> {
  constructor() {
    super('/list', new ListController());
  }

  protected routes(): void {
    this.api.get('/', this.controller.findAll.bind(this.controller));
    this.api.post('/', this.controller.addOne.bind(this.controller));
    this.api.get('/:id', this.controller.findOne.bind(this.controller));
    this.api.put('/:id', this.controller.updateOne.bind(this.controller));
    this.api.delete('/:id', this.controller.deleteOne.bind(this.controller));
  }
}

export default ListRoute;
