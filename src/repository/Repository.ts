/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IRead<T> {
  findOne(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}

export interface IWrite<T> {
  create(item: T): Promise<string>;
  update(item: T): Promise<void>;
  delete(id: string): Promise<void>;
}

export default abstract class Repository<T> implements IRead<T>, IWrite<T> {
  public abstract create(item: T): Promise<string>;
  public abstract update(item: T): Promise<void>;
  public abstract delete(id: string): Promise<void>;
  public abstract findOne(id: string): Promise<T>;
  public abstract getAll(): Promise<T[]>;
}
