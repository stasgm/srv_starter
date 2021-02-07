import Model from '@models/index';
import { IClinic } from '@models/interfaces';
import ReferencesDao from '@common/references/references.dao';

class Dao extends ReferencesDao<IClinic> {
  constructor() {
    super(new Model().clinics);
  }
}

export default Dao;
