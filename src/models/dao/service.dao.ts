import Dao from './base.dao';
import Model from '@models/index';
import { IService } from '../interfaces';

class ClinicDao extends Dao<IService> {
  constructor() {
    super(new Model().services);
  }

  public create = async (item: IService): Promise<string> => {
    return this.model.insert(item);
  };

  public update = async (item: IService): Promise<void> => {
    await this.model.update(item);
  };

  public delete = async (id: string): Promise<void> => {
    await this.model.delete(id);
  };

  public getAll = async (): Promise<IService[]> => {
    return await this.model.read();
  };

  public findOne = async (id: string): Promise<IService> => {
    return this.model.find(id);
  };
}

export default ClinicDao;
