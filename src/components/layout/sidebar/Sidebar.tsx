import { Flex } from "@chakra-ui/react";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <Flex
      className="h-full w-full shadow-md rounded-tr-lg rounded-br-lg"
      bg="#ffffff20"
      backdropFilter="blur(8px)"
      direction="column"
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </Flex>
  );
}
