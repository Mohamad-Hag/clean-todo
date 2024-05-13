import { Badge, Flex, Input, Text } from "@chakra-ui/react";
import maxAllowedCharsForFolderName from "data/typescript/maxAllowedCharsForFolderName";
import useIsMobile from "hooks/useIsMobile";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { edit } from "redux/features/folderSlice";
import { selectTodos } from "redux/features/todosSlice";

interface FolderButtonContentProps {
  id: number;
  title: string;
  isActive: boolean;
}

export default function FolderButtonContent({
  title,
  id,
  isActive,
}: FolderButtonContentProps) {
  const isMobile = useIsMobile();
  const [t, setT] = useState<string>(title);
  const [isFocusState, setIsFocusState] = useState<boolean>(false);
  const inRef = useRef<HTMLInputElement>(null!);
  const d = useDispatch();
  const todos = useSelector(selectTodos);
  const todosCountPerFolder = todos.filter(
    (todo) => todo.folderId === id && !todo.isInTrash
  ).length;

  const clicked = (e: React.MouseEvent<HTMLInputElement>) => {
    if (isFocusState || !isActive || isMobile) return;
    let inCurrent = inRef.current;

    setTimeout(() => {
      setIsFocusState(true);
      inCurrent.focus();
      inCurrent.setSelectionRange(0, t.length);
    }, 500);
  };

  const changed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setT(e.target.value);
  };

  const edit_ = () => {
    let finalTitle = t.length === 0 ? title : t;
    d(
      edit({
        id: id,
        editable: {
          title: finalTitle,
        },
      })
    );
    setT(finalTitle);
  };

  const save = () => {
    edit_();
    setIsFocusState(false);
  };

  const blurred = (e: React.FocusEvent<HTMLInputElement>) => {
    save();
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();
    save();
  };

  return (
    <Flex
      align="center"
      gap={2}
      w="100%"
      justify="space-between"
      flex={1}
      overflow="hidden"
      position="relative"
    >
      <form onSubmit={submitted}>
        <Input
          ref={inRef}
          className={`folder-in ${
            isFocusState ? "folder-in-focus" : "folder-in-normal"
          }`}
          variant="unstyled"
          max={maxAllowedCharsForFolderName}
          value={t}
          title={t}
          readOnly={!isFocusState}
          onClick={clicked}
          onBlur={blurred}
          onChange={changed}
        />
      </form>
      <Badge
        fontSize="xs"
        variant="solid"
        colorScheme="blue"
        fontWeight="normal"
      >
        {todosCountPerFolder}
      </Badge>
    </Flex>
  );
}
