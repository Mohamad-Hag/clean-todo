import { BiTrash } from "react-icons/bi";
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
      icon={<BiTrash />}
      title="Remove Finished"
      onAction={remove}
    />
  );
}
