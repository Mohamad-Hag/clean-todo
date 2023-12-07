import Autolinker from "autolinker";
import ConditionalRenderer from "components/common/ConditionalRenderer";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPreferences } from "redux/features/preferencesSlice";
import {
  expandDescription,
  collapseDescription,
  selectTodos,
} from "redux/features/todosSlice";

interface TodoItemDescriptionProps {
  id: number;
  description?: string;
}

export default function TodoItemDescription({
  id,
  description,
}: TodoItemDescriptionProps) {
  const preferences = useSelector(selectPreferences);
  const todos = useSelector(selectTodos);
  const isExpanded = todos.find((todo) => todo.id === id)
    ?.isDescriptionExpanded!;
  const d = useDispatch();
  const showDescription = preferences.todoPreferences?.alwaysShowDescription;
  const collapseDescriptionPreference =
    preferences.todoPreferences?.collapseDescription;
  const isDescriptionDefined = description && description !== "";
  const HTMLDescription = Autolinker.link(description!);
  const HTMLDescriptionObject = {
    __html: HTMLDescription,
  };
  const ref = useRef<HTMLParagraphElement>(null!);
  const expandLabel = !isExpanded ? "Expand" : "Collapse";

  const constructClassName = () => {
    if (collapseDescriptionPreference)
      return !isExpanded
        ? "toolbar-item-info-description"
        : "toolbar-item-info-description-init";
    else return "toolbar-item-info-description-init";
  };

  const click = () => {
    ref.current.style.display = isExpanded ? "-webkit-box" : "initial";
    if (!isExpanded) d(expandDescription(id));
    else d(collapseDescription(id));
  };

  return (
    <ConditionalRenderer condition={!!isDescriptionDefined && showDescription}>
      <p
        className={constructClassName()}
        ref={ref}
        dangerouslySetInnerHTML={HTMLDescriptionObject}
      />
      {description!.includes("<div>") && collapseDescriptionPreference && (
        <label
          className="text-gray-500 underline cursor-pointer hover:opacity-80 text-right self-end text-sm"
          onClick={click}
        >
          {expandLabel}
        </label>
      )}
    </ConditionalRenderer>
  );
}
