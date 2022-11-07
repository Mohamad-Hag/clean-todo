import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BiCheck, BiListUl, BiStar } from "react-icons/bi";
import Logo from "../../Logo";
import SidebarButton from "../sidebar/SidebarButton";
import SidebarMenuButton from "./SidebarMenuButton";

export type SidebarStatus = "hidden" | "shown";

interface SidebarProps {
  onStatusChange?: (status: SidebarStatus) => void;
}

export default function Sidebar({ onStatusChange }: SidebarProps) {
  const [status, setStatus] = useState<SidebarStatus>("shown");  

  const display = (value: string) => (status === "shown" ? value : "none");

  const statusChanged = (status: SidebarStatus) => {
    setStatus(status);
    if (onStatusChange) onStatusChange(status);
  };

  return (
    <Flex
      className="h-full w-full shadow-md"
      bg="#ffffff50"
      backdropFilter="blur(10px)"
      direction="column"
    >
      <Flex
        className="border-b-2"
        borderColor="#ffffff20"
        p="5"
        h="80px"
        align="center"
        justify={status === "shown" ? "space-between" : "center"}
      >
        <Box display={display("initial")}>
          <Logo />
        </Box>
        <SidebarMenuButton onStatusChange={statusChanged} />
      </Flex>
      <Box
        className="flex-1 py-5 pr-3 overflow-auto scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-transparent"
        display={display("initial")}
      >
        <SidebarButton icon={<BiListUl />} title="All Todos" isActive />
        <SidebarButton icon={<BiStar />} title="Active Todos" />
        <SidebarButton icon={<BiCheck />} title="Finished Todos" />
      </Box>
    </Flex>
  );
}
