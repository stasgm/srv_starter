import BaseService from '../base.service';
import { INamedEntity } from './interfaces';
import ReferencesDao from './references.dao';

abstract class ReferencesService<
  U extends INamedEntity = INamedEntity,
  T extends ReferencesDao<U> = ReferencesDao<U>
> extends BaseService<U, T> {
  constructor(dao: T) {
    super(dao);
  }

  public async findByName(name: string): Promise<U> {
    return await this.dao.findByName(name);
  }
}

export default ReferencesService;
