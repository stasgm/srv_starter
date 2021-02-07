import Model from '@models/index';
import ReferencesDao from '@common/references/references.dao';
import { IService } from '@models/interfaces';

class Dao extends ReferencesDao<IService> {
  constructor() {
    super(new Model().services);
  }
}

export default Dao;
