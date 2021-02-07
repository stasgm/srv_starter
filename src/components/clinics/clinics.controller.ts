import Service from './clinics.service';
import { IClinic } from '@models/interfaces';
import ReferencesController from '@common/references/references.cotroller';

class Controller extends ReferencesController<IClinic, Service> {
  constructor() {
    super(new Service());
  }
}

export default Controller;
