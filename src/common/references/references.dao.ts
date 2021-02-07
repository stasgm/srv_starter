import BaseDao from '../base.dao';
import { Collection } from '../../databases/json-db';
import { INamedEntity } from './interfaces';

abstract class ReferencesDao<U extends INamedEntity = INamedEntity> extends BaseDao<U> {
  constructor(model: Collection<U>) {
    super(model);
  }

  public findByName = async (name: string): Promise<U> => {
    return this.model.find((item: U) => item.name === name);
  };
}

export default ReferencesDao;
