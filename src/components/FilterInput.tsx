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
import useKeyboardShortcut, { Modifier } from "../hooks/useKeyboardShortcut";
import TodoProps from "../utils/interfaces/common/Todo";

export interface FilterInputProps {
  onFilterDone: (filteredTodos: TodoProps[], currentQuery: string) => void;
  filterData: TodoProps[];
}

export default function FilterInput({
  onFilterDone,
  filterData,
}: FilterInputProps) {
  const inputRef = useRef<HTMLInputElement>(null!);
  const filterKey = { key: "/", code: 191 };
  const filterModifierKey: Modifier = "Ctrl";

  useKeyboardShortcut(() => inputRef.current.focus(), filterKey.code, "Ctrl");

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    let criteria = e.target.value;
    onFilterDone(getFilteredTodos(criteria), criteria);
  };

  const getFilteredTodos = (criteria: string) => {
    let filtered = filterData.filter((todo) => {
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
    <FormControl className="bg-white rounded-md shadow-md select-none">
      <InputGroup>
        <InputLeftElement height="100%">
          <BiFilterAlt size={24} color="#BBB" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          pr="90px"
          onChange={filter}
          variant="filled"
          size="lg"
          placeholder="Filter Todos..."
          _focus={{ border: "none" }}
          border="none"
        />
        <InputRightElement h="100%" pr="50px">
          <Kbd>{filterModifierKey}</Kbd> + <Kbd>{filterKey.key}</Kbd>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
