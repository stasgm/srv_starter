interface IClinic {
  id: string;
  name: string;
  address?: string;
}

interface IService {
  id: string;
  name: string;
  duration: string;
}

interface IPerson {
  id: string;
  name: string;
  phone?: string;
}

interface IVisit {
  id: string;
  dateTime: Date;
  clinicId: string;
  personId: IPerson;
  serviceId: IService;
}

export { IClinic, IService, IPerson, IVisit };
