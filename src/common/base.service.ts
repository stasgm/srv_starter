import BaseDao from '@common/base.dao';
import { IEntity } from '../models/interfaces';

abstract class BaseService<U extends IEntity = IEntity, T extends BaseDao<U> = BaseDao<U>> {
  protected readonly dao: T;

  constructor(dao: T) {
    this.dao = dao;
  }

  public addOne = async (item: U): Promise<string> => {
    return await this.dao.create(item);
  };

  public getAll = async (): Promise<U[]> => {
    return await this.dao.getAll();
  };

  public findOne = async (id: string): Promise<U> => {
    return await this.dao.findOne(id);
  };

  public updateOne = async (item: U): Promise<void> => {
    return await this.dao.update(item);
  };

  public deleteOne = async (id: string): Promise<void> => {
    return await this.dao.delete(id);
  };
}

export default BaseService;
