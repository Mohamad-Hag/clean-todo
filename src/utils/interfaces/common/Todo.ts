type DateString = string;

export interface TodoEditable {
  title?: string;
  description?: string;
  isFinshed?: boolean;
  isSelected?: boolean;
}

export default interface TodoProps extends TodoEditable {
  id?: number;
  date: DateString;
  nodeRef?: any;
}

export interface TodoData extends TodoEditable {
  id?: number;
  createdAt: DateString;
  updatedAt?: DateString;
  nodeRef?: any;
}
