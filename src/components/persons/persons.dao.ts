import Model from '@models/index';
import { IPerson } from '@models/interfaces';
import ReferencesDao from '@common/references/references.dao';

class Dao extends ReferencesDao<IPerson> {
  constructor() {
    super(new Model().persons);
  }
}

export default Dao;
