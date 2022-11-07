import { Box, Flex } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { SidebarStatus } from "./sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode[];
  sidebarSlotStatus?: SidebarStatus;
}

export default function Layout({
  children,
  sidebarSlotStatus = "shown",
}: LayoutProps) {
  const headerHeight = "80px";
  const sidebarWidth = isMobile
    ? "0"
    : sidebarSlotStatus === "shown"
    ? "80"
    : "14";

  return (
    <>
      <Flex h="100vh" maxH="100vh" w="100%">
        <Box
          className=" relative z-30"
          w={sidebarWidth}
          transitionTimingFunction="ease-in-out"
          transition={!isMobile ? "width .3s" : undefined}
        >
          {/* Sidebar */}
          {children[1]}
        </Box>
        <Flex flex={1} direction="column">
          <Box h={headerHeight} className="relative z-20">
            {/* Header */}
            {children[0]}
          </Box>
          <Box
            className="relative z-40 flex-1 overflow-y-scroll pb-5 px-5 scrollbar-thumb-gray-200 scrollbar scrollbar-track-transparent\"
            h={`calc(100vh - ${headerHeight})`}
          >
            {/* Container */}
            {children[2]}
          </Box>
        </Flex>
      </Flex>
      {/* TodoCreateButton */}
      {children[3]}
      {/* TodoCreator */}
      {children[4]}
    </>
  );
}
