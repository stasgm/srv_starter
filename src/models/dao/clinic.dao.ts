import Dao from './base.dao';
import Model from '@models/index';
import { IClinic } from '../interfaces';

class ClinicDao extends Dao<IClinic> {
  constructor() {
    super(new Model().clinics);
  }

  public create = async (item: IClinic): Promise<string> => {
    return this.model.insert(item);
  };

  public update = async (item: IClinic): Promise<void> => {
    await this.model.update(item);
  };

  public delete = async (id: string): Promise<void> => {
    await this.model.delete(id);
  };

  public getAll = async (): Promise<IClinic[]> => {
    return await this.model.read();
  };

  public findOne = async (id: string): Promise<IClinic> => {
    return this.model.find(id);
  };
}

export default ClinicDao;
