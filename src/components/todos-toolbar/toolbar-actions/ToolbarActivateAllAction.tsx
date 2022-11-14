import { BiStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { activateAll } from "../../../redux/features/todosSlice";
import ToolbarAction from "../ToolbarAction";

export default function ToolbarActivateAllAction() {
  const d = useDispatch();

  const activate = () => {
    d(activateAll());
  };

  return (
    <ToolbarAction icon={<BiStar />} title="Activate All" onAction={activate} />
  );
}
