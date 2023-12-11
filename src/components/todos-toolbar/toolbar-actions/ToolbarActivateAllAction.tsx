import { BiStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { activateAll } from "redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function ToolbarActivateAllAction() {
  const { language } = useLanguage();
  const d = useDispatch();

  const activate = () => {
    d(activateAll());
  };

  return (
    <ToolbarAction icon={<BiStar />} title={labels[language.code].activateAll} onAction={activate} />
  );
}
