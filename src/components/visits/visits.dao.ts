import BaseDao from '@common/base.dao';
import Model from '@models/index';
import { IVisit } from '@models/interfaces';

class Dao extends BaseDao<IVisit> {
  constructor() {
    super(new Model().visites);
  }
}

export default Dao;
