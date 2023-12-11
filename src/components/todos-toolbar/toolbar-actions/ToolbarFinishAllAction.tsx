import { BiCheckDouble } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { finishAll } from "redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function ToolbarFinishAllAction() {
  const { language } = useLanguage();
  const d = useDispatch();

  const finish = () => {
    d(finishAll());
  };

  return (
    <ToolbarAction
      icon={<BiCheckDouble />}
      title={labels[language.code].finishAll}
      onAction={finish}
    />
  );
}
