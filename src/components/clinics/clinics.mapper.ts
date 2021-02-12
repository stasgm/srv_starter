import { v1 as uuid } from 'uuid';
import BaseMapper from '../../common/base.mapper';
import { IClinic } from '../../models/interfaces';

type ClinicDto = Omit<IClinic, 'id'>;

class Mapper extends BaseMapper<IClinic> {
  public map(newObject: ClinicDto): IClinic {
    return {
      id: uuid(),
      ...newObject,
    };
  }
}

export default Mapper;
