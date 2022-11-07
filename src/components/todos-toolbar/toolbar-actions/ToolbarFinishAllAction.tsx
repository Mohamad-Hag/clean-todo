import { BiCheckDouble } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { finishAll } from "../../../redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";

export default function ToolbarFinishAllAction() {
  const d = useDispatch();

  const finish = () => {
    d(finishAll());
  };

  return (
    <ToolbarAction
      icon={<BiCheckDouble />}
      title="Finish All"
      onAction={finish}
    />
  );
}
