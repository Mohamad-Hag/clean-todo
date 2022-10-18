import { Flex } from "@chakra-ui/react";
import SearchInput, { SearchInputProps } from "./SearchInput";

interface HeaderProps extends SearchInputProps {}

export default function Header({ onFilterDone }: HeaderProps) {
  return (
    <div className="py-4 pl-5 pr-10">
      <Flex gap="5">
        <SearchInput onFilterDone={onFilterDone} />
      </Flex>
    </div>
  );
}
