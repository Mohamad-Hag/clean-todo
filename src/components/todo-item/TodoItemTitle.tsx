import TodoItemPriorityFlag from "./TodoItemPriorityFlag";
import TodoItemCategoryBadge from "./TodoItemCategoryBadge";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";

interface TodoItemTitleProps {
  id: number;
}

export default function TodoItemTitle({ id }: TodoItemTitleProps) {
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  let title = todo.title;
  let priority = todo.priority;

  return (
    <div className="text-xl font-semibold toolbar-item-info-title flex items-center gap-3">
      <TodoItemPriorityFlag priority={priority!} />
      <div className="flex items-center gap-5">
        <h1>{title}</h1>
        <TodoItemCategoryBadge id={id} />
      </div>
    </div>
  );
}
