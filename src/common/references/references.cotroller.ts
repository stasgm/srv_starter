import ReferencesService from './references.service';
import BaseController from '../base.cotroller';
import { INamedEntity } from './interfaces';
import BaseMapper from '../base.mapper';

abstract class ReferencesController<
  U extends INamedEntity = INamedEntity,
  T extends ReferencesService<U> = ReferencesService<U>
> extends BaseController<U, T> {
  constructor(service: T, mapper: BaseMapper<U>) {
    super(service, mapper);
  }
}

export default ReferencesController;
