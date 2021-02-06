import { IClinic } from '@models/interfaces';
import ClinicDao from '@models/dao/clinic.dao';
import { BaseService } from './base.service';

class ClinicService extends BaseService<ClinicDao> {
  constructor() {
    super(new ClinicDao());
  }

  public async addOne(item: IClinic): Promise<string> {
    return await this.dao.create(item);
  }

  public async getAll(): Promise<IClinic[]> {
    return await this.dao.getAll();
  }

  public async findOne(id: string): Promise<IClinic> {
    return await this.dao.findOne(id);
  }

  public async updateOne(item: IClinic): Promise<void> {
    return await this.dao.update(item);
  }

  public async deleteOne(id: string): Promise<void> {
    return await this.dao.delete(id);
  }
}

export default ClinicService;
