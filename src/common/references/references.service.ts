import { InvalidParameterException } from '../../exceptions';
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

  public addOne = async (item: U): Promise<string> => {
    const obj = await this.findByName(item.name);

    if (obj) {
      throw new InvalidParameterException('object already exists');
    }

    return await this.dao.create(item);
  };

  public async findByName(name: string): Promise<U> {
    return await this.dao.findByName(name);
  }
}

export default ReferencesService;
