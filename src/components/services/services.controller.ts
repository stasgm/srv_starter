import Service from './services.service';
import { IService } from '@models/interfaces';
import ReferencesController from '@common/references/references.cotroller';

class Controller extends ReferencesController<IService, Service> {
  constructor() {
    super(new Service());
  }
}

export default Controller;
