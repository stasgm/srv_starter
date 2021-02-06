import { IPerson } from '@models/interfaces';
import PersonDao from '@models/dao/person.dao';
import { BaseService } from './base.service';

class PersonService extends BaseService<PersonDao> {
  constructor() {
    super(new PersonDao());
  }

  public async addOne(item: IPerson): Promise<string> {
    return await this.dao.create(item);
  }

  public async getAll(): Promise<IPerson[]> {
    return await this.dao.getAll();
  }

  public async findOne(id: string): Promise<IPerson> {
    return await this.dao.findOne(id);
  }

  public async updateOne(item: IPerson): Promise<void> {
    return await this.dao.update(item);
  }

  public async deleteOne(id: string): Promise<void> {
    return await this.dao.delete(id);
  }
}

export default PersonService;
