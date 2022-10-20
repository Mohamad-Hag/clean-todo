import { BiSearch } from "react-icons/bi";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    return (
      <TransitionGroup>
        {todos.map((todo) => (
          <CSSTransition
            key={todo.id}
            in
            nodeRef={todo.nodeRef}
            classNames="todo"
            timeout={200}
          >
            <TodoItem
              ref={todo.nodeRef}
              isSelected={todo.isSelected}
              date={todo.date}
              id={todo.id}
              title={todo.title}
              description={todo.description}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  };

  return (
    <Container>
      <Toolbar todosNumber={todos.length} isFilterMode={isFilterMode} />
      {isTodosEmpty ? <NoData {...noDataProps} /> : listTodos()}
    </Container>
  );
}
