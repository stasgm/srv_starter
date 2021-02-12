import { v1 as uuid } from 'uuid';
import BaseMapper from '../../common/base.mapper';
import { InvalidParameterException } from '../../exceptions';
import { IVisit } from '../../models/interfaces';
import ClinicService from '../clinics/clinics.service';
import PersonService from '../persons/persons.service';
import ServiceService from '../services/services.service';

export interface IVisitDto {
  dateTime: string;
  clinicId: string;
  personId: string;
  serviceId: string;
}

class Mapper extends BaseMapper<IVisit> {
  public async map(newObject: IVisitDto): Promise<IVisit> {
    const clinicService = new ClinicService();

    const { dateTime, clinicId, personId, serviceId } = newObject;

    const clinic = await clinicService.findOne(clinicId);

    if (!clinic) {
      throw new InvalidParameterException('clinicId not found');
    }

    const personService = new PersonService();
    const person = await personService.findOne(personId);

    if (!person) {
      throw new InvalidParameterException('personId not found');
    }

    const serviceService = new ServiceService();
    const service = await serviceService.findOne(serviceId);

    if (!service) {
      throw new InvalidParameterException('serviceId not found');
    }

    service;
    return {
      id: uuid(),
      dateTime: new Date(dateTime),
      clinic,
      person,
      service,
    };
  }
}

export default Mapper;
