import { Box, Flex } from "@chakra-ui/react";
import { BiCheck, BiListUl, BiStar } from "react-icons/bi";
import Logo from "./Logo";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <Flex
      className="h-full w-full shadow-md"
      bg="#ffffff50"
      backdropFilter="blur(10px)"
      direction="column"
    >
      <Box className="p-5 flex items-center" h="80px">
        <Logo />
      </Box>
      <div className="flex-1 py-5 overflow-auto scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-transparent">
        <SidebarButton icon={<BiListUl />} title="All Todos" isActive />
        <SidebarButton icon={<BiStar />} title="Active Todos" />
        <SidebarButton icon={<BiCheck />} title="Finished Todos" />
      </div>
    </Flex>
  );
}
