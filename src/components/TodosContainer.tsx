import { BiSearch } from "react-icons/bi";
import TodoProps from "../utils/interfaces/common/Todo";
import Container from "./Container";
import NoData from "./NoData";
import TodoItem from "./TodoItem";
import Toolbar from "./Toolbar";

interface TodosContainerProps {
  todos: TodoProps[];
  isFilterMode?: boolean;
}

export default function TodosContainer({
  todos,
  isFilterMode = false,
}: TodosContainerProps) {
  const isTodosEmpty = todos.length === 0;
  const noDataProps = isFilterMode
    ? {
        title: "No Results",
        icon: <BiSearch size={45} className="text-blue-500" />,
        description: "Try another keyword.",
      }
    : undefined;

  const listTodos = () => {
    return todos.map((todo, index) => (
      <TodoItem
        key={index}
        isSelected={todo.isSelected}
        date={todo.date}
        id={todo.id}
        title={todo.title}
        description={todo.description}
      />
    ));
  };

  return (
    <Container>
      <Toolbar todosNumber={todos.length} isFilterMode={isFilterMode} />
      {isTodosEmpty ? <NoData {...noDataProps} /> : listTodos()}
    </Container>
  );
}
