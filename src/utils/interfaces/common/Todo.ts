import Priority from "../../types/Priority";

type DateString = string;

export interface TodoEditable {
  title?: string;
  description?: string;
  priority?: Priority;
  isFinished?: boolean;
  isSelected?: boolean;
  categoryId?: number | null;
}

export default interface TodoProps extends TodoEditable {
  id: number;
  date: DateString;
  nodeRef?: any;
}

export interface TodoData extends TodoEditable {
  id?: number;
  createdAt: DateString;
  updatedAt?: DateString;
  nodeRef?: any;
}
