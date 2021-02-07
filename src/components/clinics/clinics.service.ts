import { IClinic } from '@models/interfaces';
import Dao from './clinics.dao';
import ReferencesService from '@common/references/references.service';

class Service extends ReferencesService<IClinic, Dao> {
  constructor() {
    super(new Dao());
  }
}

export default Service;
