import { Flex } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";

export default function SidebarWrapper({ children }: WithMultipleChildren) {
  return (
    <Flex
      className="h-full w-full shadow-md rounded-tr-lg rounded-br-lg"
      bg={!isMobile ? "#ffffff20" : "#222222"}
      backdropFilter="blur(8px)"
      direction="column"
    >
      {children}
    </Flex>
  );
}
