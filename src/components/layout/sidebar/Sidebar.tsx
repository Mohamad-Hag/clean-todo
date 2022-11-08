import { Flex } from "@chakra-ui/react";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <Flex
      className="h-full w-full shadow-md"
      bg="#ffffff50"
      backdropFilter="blur(10px)"
      direction="column"
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </Flex>
  );
}
