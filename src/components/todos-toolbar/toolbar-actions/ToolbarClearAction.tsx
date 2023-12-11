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
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function ToolbarClearAction() {
  const { language } = useLanguage();
  const d = useDispatch();

  const clearAllAlert = () => {
    d(open());
    d(setTitle(labels[language.code].clearAll));
    d(setDescription(labels[language.code].sureClearAllItems));
    d(setOnOk(clearAll));
  };

  const clearAll = () => {
    d(clear());
    d(close());
  };

  return (
    <ToolbarAction
      icon={<BiTrash />}
      title={labels[language.code].clearAll}
      onAction={clearAllAlert}
    />
  );
}
