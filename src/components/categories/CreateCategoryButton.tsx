import { Button } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { open, setMode } from "redux/features/categoryFormSlice";
import useKeyboardShortcut, { Modifier } from "hooks/useKeyboardShortcut";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function CreateCategoryButton() {
  const d = useDispatch();
  const { language } = useLanguage();
  const createKey = { key: "B", code: 66 };
  const createModifier: Modifier = "Ctrl";

  const create = () => {
    d(setMode("create"));
    d(open());
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
