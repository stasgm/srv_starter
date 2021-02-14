import BaseDao from '@common/base.dao';
import Model from '@models/index';
import { IDtoVisit, IVisit } from '@models/interfaces';
import { Collection } from '../../databases/json-db';
import Mapper from './visits.mapper';

class Dao extends BaseDao<IVisit> {
  constructor() {
    super(new Model().visites);
  }

  public create = async (item: IVisit): Promise<string> => {
    const newItem: IDtoVisit = {
      id: item.id,
      datetime: item.datetime.toISOString(),
      clinicId: item.clinic.id,
      personId: item.person.id,
      serviceId: item.service.id
    }
    return (this.model as unknown as Collection<IDtoVisit>).insert(newItem);
  };

  public getAll = async (): Promise<IVisit[]> => {
    const mapper = new Mapper()
    const items = await (this.model as unknown as Collection<IDtoVisit>).read();
    return items.map(i => mapper.mapToObject(i));
  };
}

export default Dao;
