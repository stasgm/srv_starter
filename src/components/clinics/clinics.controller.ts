import Service from './clinics.service';
import Mapper from './clinics.mapper';
import { IClinic } from '@models/interfaces';
import ReferencesController from '../../common/base.cotroller';

class Controller extends ReferencesController<IClinic, Service> {
  constructor() {
    super(new Service(), new Mapper());
  }
}

export default Controller;
