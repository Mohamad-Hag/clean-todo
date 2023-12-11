import { BiSearch } from "react-icons/bi";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoData from "./common/NoData";
import TodoItem from "./todo-item/TodoItem";
import { TodosContainerProps } from "./TodosContainer";
import isEmpty from "utils/isEmpty";
import useLanguage from "hooks/useLanguage";
import labels from "data/typescript/uiLabels";

interface TodosInnerContainerProps extends TodosContainerProps {}

export default function TodosInnerContainer({
  todos,
  isFilterMode,
}: TodosInnerContainerProps) {
  const { language } = useLanguage();
  const isTodosEmpty = isEmpty(todos);
  const noDataProps = isFilterMode
    ? {
        title: labels[language.code].noSearchResults,
        icon: <BiSearch size={45} className="text-blue-500" />,
        description: labels[language.code].tryDifferentKeywords,
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
              isInTrash={todo.isInTrash}
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
