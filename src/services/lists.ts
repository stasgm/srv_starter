import { IList } from '../models/types';
import ListRepository from '../repository/List';
import Repository from '../repository/dao';

/**
 * List service
 */
export class ListService {
  private dao: Dao<IList>;

  constructor() {
    this.dao = new ListRepository();
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
