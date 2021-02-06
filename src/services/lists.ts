import { IList } from '../models/types';
import ListDao from '../models/dao/List';
import { BaseService } from './base.service';

export class ListService extends BaseService<ListDao> {
  constructor() {
    super(new ListDao());
  }

  public async addOne(user: IList): Promise<string> {
    return await this.dao.create(user);
  }

  public async getAll(): Promise<IList[]> {
    return await this.dao.getAll();
  }

  public async findOne(id: string): Promise<IList> {
    return await this.dao.findOne(id);
  }

  public async updateOne(item: IList): Promise<void> {
    return await this.dao.update(item);
  }

  public async deleteOne(id: string): Promise<void> {
    return await this.dao.delete(id);
  }
}
