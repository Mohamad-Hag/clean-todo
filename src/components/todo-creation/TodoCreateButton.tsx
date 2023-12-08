import { IconButton, Tooltip } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import { open, setMode } from "redux/features/formSlice";
import labels from "data/json/ui-labels.json";

export default function TodoCreateButton() {
  const d = useDispatch();

  useKeyboardShortcut(() => create(), 81, "Ctrl");

  const create = () => {
    d(setMode("create"));
    d(open());
  };

  const label = (
    <p>
      {labels.createTodo}{" "}
      <span className="text-gray-400 text-xs">
        {labels.ctrl} {labels.plusSign} {labels.q}
      </span>
    </p>
  );

  return (
    <div className="z-50 fixed bottom-10 right-10">
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
