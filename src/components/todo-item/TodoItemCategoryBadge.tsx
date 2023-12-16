import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import { selectCategories } from "redux/features/categorySlice";
import getCategoryIconByTitle from "utils/getCategoryIconByTitle";
import { Badge } from "@chakra-ui/react";

interface TodoItemCategoryBadgeProps {
  id: number;
}

export default function TodoItemCategoryBadge({
  id,
}: TodoItemCategoryBadgeProps) {
  const todos = useSelector(selectTodos);
  const categories = useSelector(selectCategories);
  const todo = todos.find((td) => td.id === id)!;
  const category = todo
    ? categories.find((category) => category.id === todo.categoryId)
    : undefined;

  return (
    <Badge rounded={"2xl"} colorScheme="blue">
      {todo.categoryId && (
        <div className="flex items-center gap-1 text-xs px-2 py-1">
          {getCategoryIconByTitle(category?.icon!)}
          <h4>{category?.title}</h4>
        </div>
      )}
    </Badge>
  );
}
