import { Flex, ScaleFade, Stack } from "@chakra-ui/react";
import { BiCheck, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  finishSome,
  removeSome,
  selectTodos,
} from "../redux/features/todosSlice";
import SmallIconButton from "./SmallIconButton";

interface ToolbarSelectProps {}

export default function ToolbarSelect({}: ToolbarSelectProps) {
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;
  const identifiers = selections.map((selection) => selection.id!);
  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(removeSome(identifiers));
  };

  const finishAll = () => {
    dispatch(finishSome(identifiers));
  };

  if (!isSelectMode) return <></>;
  return (
    <ScaleFade in>
      <Flex gap="3" direction="row" align="center">
        <Stack spacing="1" direction="row">
          <SmallIconButton
            label="Remove"
            variant="solid"
            icon={<BiTrash />}
            color="red"
            onClick={removeAll}
          />
          <SmallIconButton
            variant="solid"
            label="Finish"
            icon={<BiCheck />}
            onClick={finishAll}
          />
        </Stack>
        <label>{selections.length + " Selected | "}</label>
      </Flex>
    </ScaleFade>
  );
}
