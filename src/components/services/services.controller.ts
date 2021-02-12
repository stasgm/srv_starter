import Service from './services.service';
import Mapper from './services.mapper';
import { IService } from '@models/interfaces';
import ReferencesController from '../../common/base.cotroller';

class Controller extends ReferencesController<IService, Service> {
  constructor() {
    super(new Service(), new Mapper());
  }
}

export default Controller;
