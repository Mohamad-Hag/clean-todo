import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  close,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "redux/features/alertSlice";
import { clear } from "redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "data/json/ui-labels.json";

export default function ToolbarClearAction() {
  const d = useDispatch();

  const clearAllAlert = () => {
    d(open());
    d(setTitle(labels.clearAll));
    d(setDescription(labels.sureClearAllItems));
    d(setOnOk(clearAll));
  };

  const clearAll = () => {
    d(clear());
    d(close());
  };

  return (
    <ToolbarAction
      icon={<BiTrash />}
      title={labels.clearAll}
      onAction={clearAllAlert}
    />
  );
}
