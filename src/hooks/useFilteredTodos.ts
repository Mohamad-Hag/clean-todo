import { useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todosSlice";
import useIsFilter from "./useIsFilter";

const useFilteredTodos = () => {
  const isFilter = useIsFilter();
  return useSelector(selectTodos).filter((todo) => isFilter(todo));
};

export default useFilteredTodos;
