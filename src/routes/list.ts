import { Router } from 'express';
import ListController from '@controllers/list';

class ListRoute {
  private api: Router = Router();
  private readonly controller: ListController;

  constructor() {
    this.controller = new ListController();
    this.routes();
  }

  public getApi(): Router {
    return this.api;
  }

  private routes(): void {
    this.api.get('/', this.controller.findAll.bind(this.controller));
    this.api.post('/', this.controller.addOne.bind(this.controller));
    this.api.get('/:id', this.controller.findOne.bind(this.controller));
    this.api.put('/:id', this.controller.updateOne.bind(this.controller));
    this.api.delete('/:id', this.controller.deleteOne.bind(this.controller));
  }
}

export default ListRoute;
