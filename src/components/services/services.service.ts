import { IService } from '@models/interfaces';
import Dao from './services.dao';
import ReferencesService from '@common/references/references.service';

class Service extends ReferencesService<IService, Dao> {
  constructor() {
    super(new Dao());
  }
}

export default Service;
