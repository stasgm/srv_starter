import Dao from './base.dao';
import Model from '@models/index';
import { IPerson } from '../interfaces';

class PersonDao extends Dao<IPerson> {
  constructor() {
    super(new Model().persons);
  }

  public create = async (item: IPerson): Promise<string> => {
    return this.model.insert(item);
  };

  public update = async (item: IPerson): Promise<void> => {
    await this.model.update(item);
  };

  public delete = async (id: string): Promise<void> => {
    await this.model.delete(id);
  };

  public getAll = async (): Promise<IPerson[]> => {
    return await this.model.read();
  };

  public findOne = async (id: string): Promise<IPerson> => {
    return this.model.find(id);
  };
}

export default PersonDao;
