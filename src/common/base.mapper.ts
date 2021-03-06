import { IEntity } from '../models/interfaces';

abstract class BaseMapper<T extends IEntity> {
  abstract mapToNewObject(obj: unknown): Promise<T> | T;
}

export default BaseMapper;
