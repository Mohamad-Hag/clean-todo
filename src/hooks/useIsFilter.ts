import TodoProps from "../utils/interfaces/common/Todo";
import { useLocation } from "react-router-dom";

const useIsFilter = () => {
  const { pathname } = useLocation();
    
  const isFilter = (todo: TodoProps) =>
    pathname === "/active"
      ? !todo.isFinished!
      : pathname === "/finished"
      ? todo.isFinished!
      : true;

  return isFilter;
};

export default useIsFilter;
