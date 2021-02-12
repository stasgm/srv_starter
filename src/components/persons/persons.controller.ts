import Service from './persons.service';
import Mapper from './persons.mapper';
import { IPerson } from '@models/interfaces';
import ReferencesController from '../../common/base.cotroller';

class Controller extends ReferencesController<IPerson, Service> {
  constructor() {
    super(new Service(), new Mapper());
  }
}

export default Controller;
