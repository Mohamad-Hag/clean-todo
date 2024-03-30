import labels from "data/typescript/uiLabels";
import useAlert from "hooks/useAlert";
import useLanguage from "hooks/useLanguage";
import { useEffect, useRef } from "react";
import isReachBottom from "utils/interfaces/common/isReachBottom";
import TodoProps from "utils/interfaces/common/Todo";

interface RemoveSelectedAlertDescriptionProps {
  selections: TodoProps[];
}

export default function RemoveSelectedAlertDescription({
  selections,
}: RemoveSelectedAlertDescriptionProps) {
  const { disableOkButton, enableOkButton, isOkButtonDisabled } = useAlert();
  const { language } = useLanguage();
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
      <p>{labels[language.code].areYouSureRemoveItems}</p>
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
          {labels[language.code].checkItemsEnableOk}
        </small>
      )}
    </>
  );
}
