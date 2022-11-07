import { BiSearch } from "react-icons/bi";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoData from "./common/NoData";
import TodoItem from "./todo-item/TodoItem";
import { TodosContainerProps } from "./TodosContainer";

interface TodosInnerContainerProps extends TodosContainerProps {}

export default function TodosInnerContainer({
  todos,
  isFilterMode,
}: TodosInnerContainerProps) {
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

  return isTodosEmpty ? <NoData {...noDataProps} /> : listTodos();
}
