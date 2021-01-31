import { Database, Collection } from '../database/json-db';
import { IList } from '@models/types';

class ListModel {
  private db: Database;
  public model: Collection<IList>;

  constructor() {
    this.db = new Database('db');
    this.model = this.db.collection<IList>('list');
  }
}
export default ListModel;
