import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todosSlice";
import TodoProps from "../utils/interfaces/common/Todo";
import Header from "./Header";
import Layout from "./Layout";
import Sidebar, { SidebarStatus } from "./Sidebar";
import TodoCreateButton from "./TodoCreateButton";
import TodoCreator from "./TodoCreator";
import TodosContainer from "./TodosContainer";

export default function TodoMain() {
  const todos = useSelector(selectTodos);
  const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>(todos);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const [sidebarSlotStatus, setSidebarSlotStatus] =
    useState<SidebarStatus>("shown");
  const isFilterQueryEmpty = filterQuery === "";
  const finalTodos = !isFilterQueryEmpty ? filteredTodos : todos;

  const filterDone = (filtered: TodoProps[], currentQuery: string) => {
    setFilterQuery(currentQuery);
    setFilteredTodos(filtered);
  };

  const sidebarStatusChanged = (status: SidebarStatus) => {
    setSidebarSlotStatus(status);
  };

  return (
    <Layout sidebarSlotStatus={sidebarSlotStatus}>
      <Header onFilterDone={filterDone} />
      <Sidebar onStatusChange={sidebarStatusChanged} />
      <TodosContainer todos={finalTodos} isFilterMode={!isFilterQueryEmpty} />
      <TodoCreateButton />
      <TodoCreator />
    </Layout>
  );
}
