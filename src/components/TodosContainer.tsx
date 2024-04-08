import TodoProps from "utils/interfaces/common/Todo";
import Container from "./Container";
import FolderSelector from "./folders/folder-selection/FolderSelector";
import Toolbar from "./todos-toolbar/Toolbar";
import TodosInnerContainer from "./TodosInnerContainer";

export interface TodosContainerProps {
  todos: TodoProps[];
  isFilterMode?: boolean;
}

export default function TodosContainer({
  todos,
  isFilterMode = false,
}: TodosContainerProps) {
  return (
    <Container>
      <Toolbar todos={todos} isFilterMode={isFilterMode} />
      <TodosInnerContainer todos={todos} isFilterMode={isFilterMode} />
      <FolderSelector />
    </Container>
  );
}
