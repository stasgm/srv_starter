import { IVisit } from '@models/interfaces';
import Dao from './visits.dao';
import BaseService from '@common/base.service';

class Service extends BaseService<IVisit, Dao> {
  constructor() {
    super(new Dao());
  }
}

export default Service;
