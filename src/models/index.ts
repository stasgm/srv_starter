import { Database, Collection } from '@databases/json-db';
import { IClinic, IPerson, IService, IVisit } from '@models/interfaces';

class Model {
  private db: Database;

  public clinics: Collection<IClinic>;
  public persons: Collection<IPerson>;
  public services: Collection<IService>;
  public visites: Collection<IVisit>;

  constructor() {
    this.db = new Database('db');
    this.clinics = this.db.collection<IClinic>('clinics');
    this.persons = this.db.collection<IPerson>('persons');
    this.services = this.db.collection<IService>('services');
    this.visites = this.db.collection<IVisit>('visites');
  }
}
export default Model;
