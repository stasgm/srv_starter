import { v1 as uuid } from 'uuid';
import BaseMapper from '../../common/base.mapper';
import { IPerson } from '../../models/interfaces';

type PersonDto = Omit<IPerson, 'id'>;

class Mapper extends BaseMapper<IPerson> {
  public map(newObject: PersonDto): IPerson {
    return {
      id: uuid(),
      ...newObject,
    };
  }
}

export default Mapper;
