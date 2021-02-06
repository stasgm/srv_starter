import BaseDao from '@models/dao/types';

export abstract class BaseService<T extends BaseDao = BaseDao> {
  protected readonly dao: T;

  constructor(dao: T) {
    this.dao = dao;
  }
}
