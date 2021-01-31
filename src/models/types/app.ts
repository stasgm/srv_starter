interface IItem {
  id: string;
  name: string;
  comment?: string;
  done?: boolean;
  index?: number;
}

interface IList {
  id: string;
  name: string;
  creationdate: Date;
  list: IItem[];
}

export { IList, IItem };
