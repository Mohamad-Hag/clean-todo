import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import useKeyboardShortcut, { Modifier } from "../hooks/useKeyboardShortcut";
import { selectTodos } from "../redux/features/todosSlice";
import TodoProps from "../utils/interfaces/common/Todo";

export interface SearchInputProps {
  onFilterDone: (filteredTodos: TodoProps[], currentQuery: string) => void;
}

export default function SearchInput({ onFilterDone }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null!);
  const todos = useSelector(selectTodos);
  const filterKey = "/";
  const filterModifierKey: Modifier = "Ctrl";

  useKeyboardShortcut(() => inputRef.current.focus(), filterKey, "Ctrl");

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    let criteria = e.target.value;
    onFilterDone(getFilteredTodos(criteria), criteria);
  };

  const getFilteredTodos = (criteria: string) => {
    let filtered = todos.filter((todo) => {
      let isMatchTitle = todo.title
        ?.toLowerCase()
        .includes(criteria.trim().toLowerCase());
      let isMatchDescription = todo.description
        ?.toLowerCase()
        .includes(criteria.trim().toLowerCase());
      return isMatchTitle || isMatchDescription;
    });
    return filtered;
  };

  return (
    <FormControl className="bg-white rounded-md shadow-md">
      <InputGroup>
        <InputLeftElement height="100%">
          <BiFilterAlt size={25} color="gray" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          pr="90px"
          onChange={filter}
          variant="filled"
          size="lg"
          placeholder="Filter..."
          _focus={{ border: "none" }}
          border="none"
        />
        <InputRightElement h="100%" pr="50px">
          <Kbd>{filterModifierKey}</Kbd> + <Kbd>{filterKey}</Kbd>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
