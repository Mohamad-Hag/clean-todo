import { BiXCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeFinished } from "redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";
import labels from "data/json/ui-labels.json";

export default function ToolbarRemovedFinishedAction() {
  const d = useDispatch();

  const remove = () => {
    d(removeFinished());
  };

  return (
    <ToolbarAction
      icon={<BiXCircle />}
      title={labels.removeFinished}
      onAction={remove}
    />
  );
}
