import ConditionalRenderer from "components/common/ConditionalRenderer";
import useIsMobile from "hooks/useIsMobile";
import { useSelector } from "react-redux";
import { selectPreferences } from "redux/features/preferencesSlice";
import { selectTodos } from "redux/features/todosSlice";
import TodoItemFolderBadge from "./TodoItemFolderBadge";
import TodoItemPriorityFlag from "./TodoItemPriorityFlag";

interface TodoItemTitleProps {
  id: number;
}

export default function TodoItemTitle({ id }: TodoItemTitleProps) {
  const isMobile = useIsMobile();
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  const preferences = useSelector(selectPreferences);
  const showPriorityIcon = preferences.todoPreferences?.alwaysShowPriorityIcon;
  let title = todo.title;
  let priority = todo.priority;
  let flexWrap = isMobile ? "wrap" : "nowrap";
  let flexGap = isMobile ? "2" : "4";

  return (
    <div className="text-xl font-semibold toolbar-item-info-title flex items-center gap-3">
      <ConditionalRenderer condition={showPriorityIcon}>
        <TodoItemPriorityFlag priority={priority!} />
      </ConditionalRenderer>
      <div className={`flex items-center gap-${flexGap} flex-${flexWrap}`}>
        <h1>{title}</h1>
        <TodoItemFolderBadge id={id} />
      </div>
    </div>
  );
}
