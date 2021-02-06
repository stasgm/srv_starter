import Dao from './base.dao';
import Model from '@models/index';
import { IVisit } from '../interfaces';

class ClinicDao extends Dao<IVisit> {
  constructor() {
    super(new Model().visites);
  }

  public create = async (item: IVisit): Promise<string> => {
    return this.model.insert(item);
  };

  public update = async (item: IVisit): Promise<void> => {
    await this.model.update(item);
  };

  public delete = async (id: string): Promise<void> => {
    await this.model.delete(id);
  };

  public getAll = async (): Promise<IVisit[]> => {
    return await this.model.read();
  };

  public findOne = async (id: string): Promise<IVisit> => {
    return this.model.find(id);
  };
}

export default ClinicDao;
