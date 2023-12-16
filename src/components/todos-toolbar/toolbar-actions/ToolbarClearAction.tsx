import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { clear } from "redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useAlert from "hooks/useAlert";

export default function ToolbarClearAction() {
  const { language } = useLanguage();
  const d = useDispatch();
  const { close, open, setDescription, setOnOk, setTitle } = useAlert();

  const clearAllAlert = () => {
    open();
    setTitle(labels[language.code].clearAll);
    setDescription(labels[language.code].sureClearAllItems);
    setOnOk(clearAll);
  };

  const clearAll = () => {
    d(clear());
    close();
  };

  return (
    <ToolbarAction
      icon={<BiTrash />}
      title={labels[language.code].clearAll}
      onAction={clearAllAlert}
    />
  );
}
