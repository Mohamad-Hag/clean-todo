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
import useKeyboardShortcut, { Modifier } from "hooks/useKeyboardShortcut";
import TodoProps from "utils/interfaces/common/Todo";
import isInclude from "utils/isInclude";
import { useSelector } from "react-redux";
import { selectCategories } from "redux/features/categorySlice";
import { selectPreferences } from "redux/features/preferencesSlice";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import ConditionalRenderer from "./common/ConditionalRenderer";
import SidebarMenuButton from "./layout/sidebar/SidebarMenuButton";
import useIsMobile from "hooks/useIsMobile";

export interface FilterInputProps {
  onFilterDone: (filteredTodos: TodoProps[], currentQuery: string) => void;
  filterData: TodoProps[];
}

export default function FilterInput({
  onFilterDone,
  filterData,
}: FilterInputProps) {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null!);
  const filterKey = { key: "/", code: 191 };
  const preferences = useSelector(selectPreferences);
  const includeDescription = preferences.filterPreferences?.includeDescription;
  const includeCategory = preferences.filterPreferences?.includeCategory;
  const includeDate = preferences.filterPreferences?.includeDate;
  const filterModifierKey: Modifier = "Ctrl";
  const categories = useSelector(selectCategories);

  useKeyboardShortcut(() => inputRef.current.focus(), filterKey.code, "Ctrl");

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    let criteria = e.target.value;
    onFilterDone(getFilteredTodos(criteria), criteria);
  };

  const isFilterConditionSatisfied = (todo: TodoProps, criteria: string) => {
    let isMatchTitle = isInclude(todo.title!, criteria);
    let isMatchDescription = isInclude(todo.description!, criteria);
    let isMatchDate = isInclude(todo.date, criteria);
    let isMatchCategoryTitle = false;
    if (todo.categoryId)
      isMatchCategoryTitle = isInclude(
        categories.find((category) => category.id === todo.categoryId)?.title!,
        criteria
      );

    let filterArray = [isMatchTitle];

    if (includeDescription) filterArray.push(isMatchDescription);
    if (includeCategory) filterArray.push(isMatchCategoryTitle);
    if (includeDate) filterArray.push(isMatchDate);

    let isFilter = !!filterArray.find((value) => value === true);

    return isFilter;
  };

  const getFilteredTodos = (criteria: string) => {
    let filtered = filterData.filter((todo) =>
      isFilterConditionSatisfied(todo, criteria)
    );
    return filtered;
  };

  return (
    <FormControl className="bg-white rounded-md shadow-md select-none">
      <InputGroup>
        <InputLeftElement height="100%">
          <ConditionalRenderer
            condition={!isMobile}
            replaceWith={<SidebarMenuButton />}
          >
            <BiFilterAlt size={24} color="#BBB" />
          </ConditionalRenderer>
        </InputLeftElement>
        <Input
          ref={inputRef}
          autoComplete="off"
          pr="90px"
          onChange={filter}
          variant="filled"
          size="lg"
          placeholder={labels[language.code].filterTodosDots}
          _focus={{ border: "none" }}
          border="none"
        />
        <ConditionalRenderer condition={!isMobile}>
          <InputRightElement h="100%" pr="50px">
            <Kbd>{filterModifierKey}</Kbd> + <Kbd>{filterKey.key}</Kbd>
          </InputRightElement>
        </ConditionalRenderer>
      </InputGroup>
    </FormControl>
  );
}
