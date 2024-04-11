import { Flex } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";

export default function SidebarWrapper({ children }: WithMultipleChildren) {
  const isMobile = useIsMobile();

  return (
    <Flex
      className="sidebar h-full w-full shadow-md rounded-tr-lg rounded-br-lg"
    bg={!isMobile ? "#ffffff10" : "#222222"}
      backdropFilter="blur(8px)"
      direction="column"
    >
      {children}
    </Flex>
  );
}
