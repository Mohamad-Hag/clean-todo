import { BiXCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeFinished } from "../../../redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";

export default function ToolbarRemovedFinishedAction() {
  const d = useDispatch();

  const remove = () => {
    d(removeFinished());
  };

  return (
    <ToolbarAction
      icon={<BiXCircle />}
      title="Remove Finished"
      onAction={remove}
    />
  );
}
