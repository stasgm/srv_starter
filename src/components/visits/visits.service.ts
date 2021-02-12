import { IVisit } from '@models/interfaces';
import Dao from './visits.dao';
import BaseService from '@common/base.service';

class Service extends BaseService<IVisit, Dao> {
  constructor() {
    super(new Dao());
  }

  public addOne = async (item: IVisit): Promise<string> => {
    return await this.dao.create(item);
  };
}

export default Service;
