import { BiXCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeFinished } from "redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function ToolbarRemovedFinishedAction() {
  const { language } = useLanguage();
  const d = useDispatch();

  const remove = () => {
    d(removeFinished());
  };

  return (
    <ToolbarAction
      icon={<BiXCircle />}
      title={labels[language.code].removeFinished}
      onAction={remove}
    />
  );
}
