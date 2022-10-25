import { useDispatch } from "react-redux";
import { disableOkButton, enableOkButton } from "../redux/features/alertSlice";
import isReachBottom from "../utils/interfaces/common/isReachBottom";
import TodoProps from "../utils/interfaces/common/Todo";

interface RemoveSelectedAlertDescriptionProps {
  selections: TodoProps[];
}

export default function RemoveSelectedAlertDescription({
  selections,
}: RemoveSelectedAlertDescriptionProps) {
  const d = useDispatch();

  const selectionsScroll = (e: any) => {
    if (isReachBottom(e.target)) d(enableOkButton());
    else d(disableOkButton());
  };

  return (
    <>
      <p>Are you sure you want to remove all the following items?</p>
      <ul
        className="overflow-auto max-h-32 scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-transparent"
        onScroll={selectionsScroll}
      >
        {selections.map((todo, index) => (
          <li key={index}>
            {index + 1} - <b>{todo.title}</b>
          </li>
        ))}
      </ul>
      <small className="text-gray-500">
        Check all items to enable "Ok" button...
      </small>
    </>
  );
}
