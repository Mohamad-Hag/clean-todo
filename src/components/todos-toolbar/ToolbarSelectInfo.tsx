import { Flex, ScaleFade, Stack } from "@chakra-ui/react";
import { BiCheck, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  close,
  disableOkButton,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "../../redux/features/alertSlice";
import {
  finishSome,
  removeSome,
  selectTodos,
} from "../../redux/features/todosSlice";
import RemoveSelectedAlertDescription from "../RemoveSelectedAlertDescription";
import SmallIconButton from "../SmallIconButton";
import labels from "../../data/json/ui-labels.json";

export default function ToolbarSelectInfo() {
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;
  const identifiers = selections.map((selection) => selection.id!);
  const d = useDispatch();

  const removeAllAlert = () => {
    d(setTitle(labels.removeAll));
    d(disableOkButton());
    d(
      setDescription(<RemoveSelectedAlertDescription selections={selections} />)
    );
    d(setOnOk(removeAll));
    d(open());
  };

  const removeAll = () => {
    d(removeSome(identifiers));
    d(close());
  };

  const finishAll = () => {
    d(finishSome(identifiers));
  };

  if (!isSelectMode) return <></>;
  return (
    <ScaleFade in>
      <Flex gap="3" direction="row" align="center">
        <Stack spacing="1" direction="row">
          <SmallIconButton
            label={labels.remove}
            variant="solid"
            icon={<BiTrash />}
            color="red"
            onClick={removeAllAlert}
          />
          <SmallIconButton
            variant="solid"
            label={labels.finish}
            icon={<BiCheck />}
            onClick={finishAll}
          />
        </Stack>
        <label>{selections.length + " " + labels.selected + " | "}</label>
      </Flex>
    </ScaleFade>
  );
}
