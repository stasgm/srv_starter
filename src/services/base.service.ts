import BaseDao from '@models/dao/base.dao';

export abstract class BaseService<T extends BaseDao = BaseDao> {
  protected readonly dao: T;

  constructor(dao: T) {
    this.dao = dao;
  }
}
