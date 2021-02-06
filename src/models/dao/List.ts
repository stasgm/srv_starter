import Dao from './types';
import { IList } from '@models/types/app';
import ListModel from '@models/list';
import { Collection } from '../database/json-db';

class ListDao implements Dao<IList> {
  private model: Collection<IList>;

  constructor() {
    this.model = new ListModel().model;
  }

  public create = async (item: IList): Promise<string> => {
    return this.model.insert(item);
  };

  public update = async (item: IList): Promise<void> => {
    await this.model.update(item);
  };

  public delete = async (id: string): Promise<void> => {
    await this.model.delete(id);
  };

  public getAll = async (): Promise<IList[]> => {
    return await this.model.read();
  };

  public findOne = async (id: string): Promise<IList> => {
    return this.model.find(id);
  };
}

export default ListRepository;
