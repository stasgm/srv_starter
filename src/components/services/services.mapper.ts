import { v1 as uuid } from 'uuid';
import BaseMapper from '../../common/base.mapper';
import { IService } from '../../models/interfaces';

type ServiceDto = Omit<IService, 'id'>;

class Mapper extends BaseMapper<IService> {
  public map(newObject: ServiceDto): IService {
    return {
      id: uuid(),
      ...newObject,
    };
  }
}

export default Mapper;
