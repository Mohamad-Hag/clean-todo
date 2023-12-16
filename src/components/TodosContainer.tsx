import TodoProps from "utils/interfaces/common/Todo";
import Container from "./Container";
import CategorySelector from "./categories/category-selection/CategorySelector";
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
    <Container >
      <Toolbar todos={todos} isFilterMode={isFilterMode} />
      <TodosInnerContainer todos={todos} isFilterMode={isFilterMode} />
      <CategorySelector />
    </Container>
  );
}
