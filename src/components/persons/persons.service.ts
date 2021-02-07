import { IPerson } from '@models/interfaces';
import Dao from './persons.dao';
import ReferencesService from '@common/references/references.service';

class Service extends ReferencesService<IPerson, Dao> {
  constructor() {
    super(new Dao());
  }
}

export default Service;
