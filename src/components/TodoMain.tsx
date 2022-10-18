import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todosSlice";
import TodoProps from "../utils/interfaces/common/Todo";
import Header from "./Header";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import TodoCreateButton from "./TodoCreateButton";
import TodoCreator from "./TodoCreator";
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
