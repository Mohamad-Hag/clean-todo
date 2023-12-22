import { IconButton, Tooltip } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import useLanguage from "hooks/useLanguage";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectDraft } from "redux/features/draftSlice";
import { open, openAsDraft, setMode } from "redux/features/formSlice";
import isDraft from "utils/isDraft";
import getFormDraft from "utils/types/getFormDraft";

export default function TodoCreateButton() {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const draft = useSelector(selectDraft);
  const d = useDispatch();

  useKeyboardShortcut(() => create(), 81, "Ctrl");

  const create = () => {
    if (isDraft(draft, "todo")) {
      d(openAsDraft(getFormDraft(draft, "todo")));
    } else {
      d(setMode("create"));
      d(open());
    }
  };

  // const bottomRight = isMobile ? "5" : "10";

  const label = isMobile ? undefined : (
    <p>
      {labels[language.code].createTodo}{" "}
      <span className="text-gray-400 text-xs">
        {labels[language.code].ctrl} {labels[language.code].plusSign}{" "}
        {labels[language.code].q}
      </span>
    </p>
  );

  return (
    <div className={`z-50 fixed bottom-10 right-10`}>
      <Tooltip label={label} placement="right" hasArrow>
        <IconButton
          className="create-btn"
          style={{ boxShadow: "0 5px 20px 5px #00000040" }}
          onClick={create}
          aria-label="create todo button"
          size="lg"
          variant="solid"
          colorScheme="blue"
          icon={<BiPlus size={22} />}
        ></IconButton>
      </Tooltip>
    </div>
  );
}
