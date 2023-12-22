import { Button } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { open, openAsDraft, setMode } from "redux/features/categoryFormSlice";
import useKeyboardShortcut, { Modifier } from "hooks/useKeyboardShortcut";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import isDraft from "utils/isDraft";
import { useSelector } from "react-redux";
import { selectDraft } from "redux/features/draftSlice";
import getFormDraft from "utils/types/getFormDraft";

export default function CreateCategoryButton() {
  const d = useDispatch();
  const { language } = useLanguage();
  const draft = useSelector(selectDraft);
  const createKey = { key: "B", code: 66 };
  const createModifier: Modifier = "Ctrl";

  const create = () => {
    if (isDraft(draft, "category")) {
      d(openAsDraft(getFormDraft(draft, "category")));
    } else {
      d(setMode("create"));
      d(open());
    }
  };

  useKeyboardShortcut(create, createKey.code, createModifier);

  return (
    <Button
      size="sm"
      className="mb-2"
      alignSelf="end"
      rightIcon={<BiPlus />}
      onClick={create}
    >
      {labels[language.code].createCategory}
    </Button>
  );
}
