import { Button } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { open, setMode } from "../../redux/features/categoryFormSlice";
import useKeyboardShortcut, {
  Modifier,
} from "../../hooks/useKeyboardShortcut";
import labels from "../../data/json/ui-labels.json";

export default function CreateCategoryButton() {
  const d = useDispatch();
  const createkey = { key: "B", code: 66 };
  const createModifier: Modifier = "Ctrl";

  const create = () => {
    d(setMode("create"));
    d(open());
  };

  useKeyboardShortcut(create, createkey.code, createModifier);

  return (
    <Button
      size="sm"
      className="mb-2"
      alignSelf="end"
      rightIcon={<BiPlus />}
      onClick={create}
    >
      {labels.createCategory}
    </Button>
  );
}
