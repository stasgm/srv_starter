import { Database, Collection } from '@databases/json-db';
import { IClinic, IDtoVisit, IPerson, IService } from '@models/interfaces';

abstract class Model {

}

class AppModel extends Model {
  readonly #db: Database;

  readonly #clinics: Collection<IClinic>;
  readonly #persons: Collection<IPerson>;
  readonly #services: Collection<IService>;
  readonly #visites: Collection<IDtoVisit>;

  constructor() {
    super();

    this.#db = new Database('db');
    this.#clinics = this.#db.collection<IClinic>('clinics');
    this.#persons = this.#db.collection<IPerson>('persons');
    this.#services = this.#db.collection<IService>('services');
    this.#visites = this.#db.collection<IDtoVisit>('visites');
  }

  public get clinics() {
    return this.#clinics;
  }

  public get persons() {
    return this.#persons;
  }

  public get services() {
    return this.#services;
  }

  public get visites() {
    return this.#visites;
  }
}

export default AppModel;
