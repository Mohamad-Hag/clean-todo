import useAlert from "hooks/useAlert";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import isReachBottom from "utils/interfaces/common/isReachBottom";
import TodoProps from "utils/interfaces/common/Todo";

interface RemoveSelectedAlertDescriptionProps {
  selections: TodoProps[];
}

export default function RemoveSelectedAlertDescription({
  selections,
}: RemoveSelectedAlertDescriptionProps) {
  const { disableOkButton, enableOkButton, isOkButtonDisabled } = useAlert();
  const scrollableULRef = useRef<HTMLUListElement>(null!);

  const selectionsScroll = (e: any) => {
    if (isReachBottom(e.target)) enableOkButton();
    else disableOkButton();
  };

  const hasVerticalScrollbar = () =>
    scrollableULRef.current.scrollHeight > scrollableULRef.current.clientHeight;

  useEffect(() => {
    if (!hasVerticalScrollbar()) enableOkButton();
  }, []);

  return (
    <>
      <p>Are you sure you want to remove all the following items?</p>
      <ul
        ref={scrollableULRef}
        className="overflow-auto max-h-32 scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-transparent"
        onScroll={selectionsScroll}
      >
        {selections.map((todo, index) => (
          <li key={index}>
            {index + 1} - <b>{todo.title}</b>
          </li>
        ))}
      </ul>
      {isOkButtonDisabled && (
        <small className="text-gray-500">
          Check all items to enable "Ok" button...
        </small>
      )}
    </>
  );
}
