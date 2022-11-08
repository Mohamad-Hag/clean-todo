import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todosSlice";
import TodoProps from "../utils/interfaces/common/Todo";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import Sidebar from "./layout/sidebar/Sidebar";
import TodoCreateButton from "./todo-creation/TodoCreateButton";
import TodoCreator from "./todo-creation/TodoCreator";
import TodosContainer from "./TodosContainer";

export default function TodoMain() {
  const todos = useSelector(selectTodos);
  const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>(todos);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const isFilterQueryEmpty = filterQuery === "";
  const finalTodos = !isFilterQueryEmpty ? filteredTodos : todos;

  const filterDone = (filtered: TodoProps[], currentQuery: string) => {
    setFilterQuery(currentQuery);
    setFilteredTodos(filtered);
  };

  return (
    <Layout>
      <Header onFilterDone={filterDone} />
      <Sidebar />
      <TodosContainer todos={finalTodos} isFilterMode={!isFilterQueryEmpty} />
      <TodoCreateButton />
      <TodoCreator />
    </Layout>
  );
}
