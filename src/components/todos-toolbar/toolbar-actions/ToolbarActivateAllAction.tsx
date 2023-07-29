import { BiStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { activateAll } from "../../../redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "../../../data/json/ui-labels.json";

export default function ToolbarActivateAllAction() {
  const d = useDispatch();

  const activate = () => {
    d(activateAll());
  };

  return (
    <ToolbarAction icon={<BiStar />} title={labels.activateAll} onAction={activate} />
  );
}
