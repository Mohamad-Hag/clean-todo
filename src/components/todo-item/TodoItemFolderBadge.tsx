import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import { selectFolders } from "redux/features/folderSlice";
import getFolderIconByTitle from "utils/getFolderIconByTitle";
import { Badge } from "@chakra-ui/react";

interface TodoItemFolderBadgeProps {
  id: number;
}

export default function TodoItemFolderBadge({
  id,
}: TodoItemFolderBadgeProps) {
  const todos = useSelector(selectTodos);
  const folders = useSelector(selectFolders);
  const todo = todos.find((td) => td.id === id)!;
  const folder = todo
    ? folders.find((folder) => folder.id === todo.folderId)
    : undefined;

  return (
    <Badge rounded={"2xl"} colorScheme="blue">
      {todo.folderId && (
        <div className="flex items-center gap-1 text-xs px-2 py-1">
          {getFolderIconByTitle(folder?.icon!)}
          <h4>{folder?.title}</h4>
        </div>
      )}
    </Badge>
  );
}
