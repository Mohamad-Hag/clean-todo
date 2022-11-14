import Autolinker from "autolinker";
import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface TodoItemDescriptionProps {
  description?: string;
}

export default function TodoItemDescription({
  description,
}: TodoItemDescriptionProps) {
  const isDescriptionDefined = description && description !== "";
  const HTMLDescription = Autolinker.link(description!);
  const HTMLDescriptionObject = {
    __html: HTMLDescription,
  };
  const ref = useRef<HTMLParagraphElement>(null!);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const expandLabel = !isExpanded ? "Expand" : "Collapse";

  const click = () => {
    ref.current.style.display = isExpanded ? "-webkit-box" : "initial";
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isDescriptionDefined && (
        <>
          <p
            className="toolbar-item-info-description"
            ref={ref}
            dangerouslySetInnerHTML={HTMLDescriptionObject}
          />
          {description!.split(/\r\n|\r|\n/).length <= 1 && (
            <label
              className="text-gray-500 underline cursor-pointer hover:opacity-80 text-right self-end text-sm"
              onClick={click}
            >
              {expandLabel}
            </label>
          )}
        </>
      )}
    </>
  );
}
