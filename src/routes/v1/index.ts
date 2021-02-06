import { Router } from 'express';
import environnement from '../../config/environnement';

import ListRoute from './list.route';

export class IndexRoute {
  [x: string]: unknown;
  private api: Router = Router();

  private listRoute: ListRoute;

  constructor() {
    this.listRoute = new ListRoute();

    this.routes();
  }

  /**
   * @return The application router/api
   */
  public getApi(): Router {
    return this.api;
  }

  /**
   * Define index routes
   */
  private routes(): void {
    this.api.get('/', (req, res) => {
      res.json({
        server: 'server',
        version: environnement.VERSION,
      });
    });

    this.api.get('/_health', (req, res) => {
      res.sendStatus(200);
    });

    this.api.use('/list', this.listRoute.getApi());
  }
}
