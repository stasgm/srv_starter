import { Router } from 'express';
import environnement from '@config/environnement';

import ClinicRoute from './clinic.route';
import PersonRoute from './person.route';
import ServiceRoute from './service.route';
import VisitRoute from './visit.route';

export class IndexRoute {
  [x: string]: unknown;
  private api: Router = Router();
  // переделать в массив
  private clinicRoute: ClinicRoute;
  private personRoute: PersonRoute;
  private serviceRoute: ServiceRoute;
  private visitRoute: VisitRoute;

  constructor() {
    this.clinicRoute = new ClinicRoute();
    this.personRoute = new PersonRoute();
    this.serviceRoute = new ServiceRoute();
    this.visitRoute = new VisitRoute();

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

    this.api.use(this.clinicRoute.getName(), this.clinicRoute.getApi());
    this.api.use(this.personRoute.getName(), this.personRoute.getApi());
    this.api.use(this.serviceRoute.getName(), this.serviceRoute.getApi());
    this.api.use(this.visitRoute.getName(), this.visitRoute.getApi());
  }
}
