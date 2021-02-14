import { Collection } from '@databases/json-db';
import { IEntity } from '@models/interfaces';
import { IRead, IWrite } from './interfaces';

abstract class BaseDao<T extends IEntity = IEntity> implements IRead<T>, IWrite<T> {
  protected readonly model: Collection<T>;

  constructor(model: Collection<any>) {
    this.model = model;
  }

  public create = async (item: T): Promise<string> => {
    return this.model.insert(item);
  };

  public update = async (item: T): Promise<void> => {
    await this.model.update(item);
  };

  public delete = async (id: string): Promise<void> => {
    await this.model.delete(id);
  };

  public getAll = async (): Promise<T[]> => {
    return await this.model.read();
  };

  public findOne = async (id: string): Promise<T> => {
    return this.model.find(id);
  };
}

export default BaseDao;
