import { IVisit } from '@models/interfaces';
import VisitDao from '@models/dao/visit.dao';
import { BaseService } from './base.service';

class VisitService extends BaseService<VisitDao> {
  constructor() {
    super(new VisitDao());
  }

  public async addOne(item: IVisit): Promise<string> {
    return await this.dao.create(item);
  }

  public async getAll(): Promise<IVisit[]> {
    return await this.dao.getAll();
  }

  public async findOne(id: string): Promise<IVisit> {
    return await this.dao.findOne(id);
  }

  public async updateOne(item: IVisit): Promise<void> {
    return await this.dao.update(item);
  }

  public async deleteOne(id: string): Promise<void> {
    return await this.dao.delete(id);
  }
}

export default VisitService;
