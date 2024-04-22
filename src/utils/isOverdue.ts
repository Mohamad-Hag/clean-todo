import TodoProps from "./interfaces/common/Todo";

const isOverdue = (todo: TodoProps): boolean => {
  if (!todo.dueDate) return false;
  const date_ = new Date().getTime();
  const dueDate_ = new Date(todo.dueDate).getTime();

  return dueDate_ <= date_;
};

export default isOverdue;
