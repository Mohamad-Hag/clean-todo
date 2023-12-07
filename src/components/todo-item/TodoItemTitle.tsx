import TodoItemPriorityFlag from "./TodoItemPriorityFlag";
import TodoItemCategoryBadge from "./TodoItemCategoryBadge";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import { selectPreferences } from "redux/features/preferencesSlice";
import ConditionalRenderer from "components/common/ConditionalRenderer";

interface TodoItemTitleProps {
  id: number;
}

export default function TodoItemTitle({ id }: TodoItemTitleProps) {
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  const preferences = useSelector(selectPreferences);
  const showPriorityIcon = preferences.todoPreferences?.alwaysShowPriorityIcon;
  let title = todo.title;
  let priority = todo.priority;

  return (
    <div className="text-xl font-semibold toolbar-item-info-title flex items-center gap-3">
      <ConditionalRenderer condition={showPriorityIcon}>
        <TodoItemPriorityFlag priority={priority!} />
      </ConditionalRenderer>
      <div className="flex items-center gap-5">
        <h1>{title}</h1>
        <TodoItemCategoryBadge id={id} />
      </div>
    </div>
  );
}
