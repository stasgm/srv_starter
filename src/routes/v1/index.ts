import { Router } from 'express';
import environnement from '@config/environnement';
import ClinicsRoute from '@components/clinics/clinics.route';
import PersonsRoute from '@components/persons/persons.route';
import ServicesRoute from '@components/services/services.route';
import VisitsRoute from '@components/visits/visits.route';

class IndexRoute {
  [x: string]: unknown;
  private api: Router = Router();
  // переделать в массив
  private clinicsRoute: ClinicsRoute;
  private personsRoute: PersonsRoute;
  private servicesRoute: ServicesRoute;
  private visitsRoute: VisitsRoute;

  constructor() {
    this.clinicsRoute = new ClinicsRoute();
    this.personsRoute = new PersonsRoute();
    this.servicesRoute = new ServicesRoute();
    this.visitsRoute = new VisitsRoute();

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

    this.api.use(this.clinicsRoute.getName(), this.clinicsRoute.getApi());
    this.api.use(this.personsRoute.getName(), this.personsRoute.getApi());
    this.api.use(this.servicesRoute.getName(), this.servicesRoute.getApi());
    this.api.use(this.visitsRoute.getName(), this.visitsRoute.getApi());
  }
}

export default IndexRoute;
