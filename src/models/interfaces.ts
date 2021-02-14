import { INamedEntity } from '@common/references/interfaces';

interface IEntity {
  id: string;
}

interface IClinic extends INamedEntity {
  address?: string;
}

interface IService extends INamedEntity {
  duration: string;
}

interface IPerson extends INamedEntity {
  phone?: string;
}

interface IVisit extends IEntity {
  datetime: Date;
  clinic: IClinic;
  person: IPerson;
  service: IService;
}

interface IDtoVisit extends IEntity {
  datetime: string;
  clinicId: string;
  personId: string;
  serviceId: string;
}

type Method = 'add' | 'patch';

type IValidation = {
  [name in Method]: Record<string, unknown>;
};

export { IEntity, IClinic, IService, IPerson, IVisit, IValidation, IDtoVisit };
