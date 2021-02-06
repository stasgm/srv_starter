import { IService } from '@models/interfaces';
import ServiceDao from '@models/dao/service.dao';
import { BaseService } from './base.service';

class ServiceService extends BaseService<ServiceDao> {
  constructor() {
    super(new ServiceDao());
  }

  public async addOne(item: IService): Promise<string> {
    return await this.dao.create(item);
  }

  public async getAll(): Promise<IService[]> {
    return await this.dao.getAll();
  }

  public async findOne(id: string): Promise<IService> {
    return await this.dao.findOne(id);
  }

  public async updateOne(item: IService): Promise<void> {
    return await this.dao.update(item);
  }

  public async deleteOne(id: string): Promise<void> {
    return await this.dao.delete(id);
  }
}

export default ServiceService;
