import { Flex } from "@chakra-ui/react";
import FilterInput, { FilterInputProps } from "../FilterInput";

interface HeaderProps extends FilterInputProps {}

export default function Header({ onFilterDone }: HeaderProps) {
  return (
    <header className="py-4 px-5">
      <Flex gap="5">
        <FilterInput onFilterDone={onFilterDone} />
      </Flex>
    </header>
  );
}
