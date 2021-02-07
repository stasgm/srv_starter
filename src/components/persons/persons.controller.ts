import Service from './persons.service';
import { IPerson } from '@models/interfaces';
import ReferencesController from '@common/references/references.cotroller';

class Controller extends ReferencesController<IPerson, Service> {
  constructor() {
    super(new Service());
  }
}

export default Controller;
