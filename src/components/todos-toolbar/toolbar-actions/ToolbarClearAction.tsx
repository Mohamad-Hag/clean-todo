import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  close,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "../../../redux/features/alertSlice";
import { clear } from "../../../redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";

export default function ToolbarClearAction() {
  const d = useDispatch();

  const clearAllAlert = () => {
    d(open());
    d(setTitle("Clear All"));
    d(setDescription("Are you sure you want to clear all items?"));
    d(setOnOk(clearAll));
  };

  const clearAll = () => {
    d(clear());
    d(close());
  };

  return (
    <ToolbarAction
      icon={<BiTrash />}
      title="Clear All"
      onAction={clearAllAlert}
    />
  );
}
