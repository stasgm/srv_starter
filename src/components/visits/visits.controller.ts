import Service from './visits.service';
import Mapper from './visits.mapper';
import BaseController from '@common/base.cotroller';
import { IVisit } from '@models/interfaces';

class Controller extends BaseController<IVisit, Service> {
  constructor() {
    super(new Service(), new Mapper());
  }
}

export default Controller;
