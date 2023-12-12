import { Flex } from "@chakra-ui/react";
import FilterInput, { FilterInputProps } from "../FilterInput";
import { isMobile } from "react-device-detect";
import SidebarMenuButton from "./sidebar/SidebarMenuButton";
import ConditionalRenderer from "components/common/ConditionalRenderer";

interface HeaderProps extends FilterInputProps {}

export default function Header({ onFilterDone, filterData }: HeaderProps) {
  const paddingX = isMobile ? "2" : "5";

  return (
    <header className={`py-4 px-${paddingX}`}>
      <Flex gap="2" alignItems="center">
        <FilterInput filterData={filterData} onFilterDone={onFilterDone} />        
      </Flex>
    </header>
  );
}
