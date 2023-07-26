import { useState } from "react";
import useFilteredTodos from "../hooks/useFilteredTodos";
import TodoProps from "../utils/interfaces/common/Todo";
import TodosContainer from "./TodosContainer";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import Sidebar from "./layout/sidebar/Sidebar";
import TodoCreateButton from "./todo-creation/TodoCreateButton";
import TodoCreator from "./todo-creation/TodoCreator";

export default function TodoMain() {
  const todos = useFilteredTodos();
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
      <Header filterData={finalTodos} onFilterDone={filterDone} />
      <Sidebar />
      <TodosContainer todos={finalTodos} isFilterMode={!isFilterQueryEmpty} />
      <TodoCreateButton />
      <TodoCreator />
    </Layout>
  );
}
