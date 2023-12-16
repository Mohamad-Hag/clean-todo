import { Flex } from "@chakra-ui/react";
import FilterInput, { FilterInputProps } from "../FilterInput";
import useIsMobile from "hooks/useIsMobile";

interface HeaderProps extends FilterInputProps {}

export default function Header({ onFilterDone, filterData }: HeaderProps) {
  const isMobile = useIsMobile();
  const paddingX = isMobile ? "2" : "5";

  return (
    <header className={`py-4 px-${paddingX}`}>
      <Flex gap="2" alignItems="center">
        <FilterInput filterData={filterData} onFilterDone={onFilterDone} />        
      </Flex>
    </header>
  );
}
