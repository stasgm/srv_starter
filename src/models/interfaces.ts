interface IApiResponse<T = string> {
  error?: string;
  message?: string;
  statusCode?: number;
  data?: T;
}

interface IEntity {
  id: string;
}
interface IClinic extends IEntity {
  name: string;
  address?: string;
}

interface IService extends IEntity {
  name: string;
  duration: string;
}

interface IPerson extends IEntity {
  name: string;
  phone?: string;
}

interface IVisit extends IEntity {
  dateTime: Date;
  clinicId: string;
  personId: IPerson;
  serviceId: IService;
}

type Method = 'add' | 'patch';

type IValidation = {
  [name in Method]: Record<string, unknown>;
};

export { IEntity, IClinic, IService, IPerson, IVisit, IApiResponse, IValidation };
