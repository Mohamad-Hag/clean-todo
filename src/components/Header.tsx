import { Flex } from "@chakra-ui/react";
import SearchInput, { SearchInputProps } from "./SearchInput";

interface HeaderProps extends SearchInputProps {}

export default function Header({ onFilterDone }: HeaderProps) {
  return (
    <header className="py-4 px-5">
      <Flex gap="5">
        <SearchInput onFilterDone={onFilterDone} />
      </Flex>
    </header>
  );
}
