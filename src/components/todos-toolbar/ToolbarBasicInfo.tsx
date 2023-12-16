import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useLanguage from "hooks/useLanguage";
import { ToolbarProps } from "./Toolbar";

export default function ToolbarBasicInfo({
  todos,
  isFilterMode,
  isTrashPage,
}: ToolbarProps) {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const finishedCount = todos.filter((todo) => todo.isFinished).length;

  return (
    <span className="opacity-80">
      {isFilterMode
        ? `${labels[language.code].results} `
        : `${labels[language.code].total} `}
      <b>{todos.length}</b>{" "}
      {isTrashPage || isFilterMode || isMobile ? null : (
        <label>
          / {labels[language.code].finished} <b>{finishedCount}</b>
        </label>
      )}
    </span>
  );
}
