import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode[];
}

export default function Layout({ children }: LayoutProps) {
  const headerHeight = "80px";

  return (
    <>
      <Flex h="100vh" maxH="100vh" w="100%">
        <div className="w-80 relative z-30">{children[1]}</div>
        <Flex flex={1} direction="column">
          <Box h={headerHeight} className="relative z-20">
            {children[0]}
          </Box>
          <Box
            className="relative z-40 flex-1 overflow-y-scroll pb-5 pr-10 pl-5 scrollbar-thumb-gray-200 scrollbar scrollbar-track-transparent\"
            h={`calc(100vh - ${headerHeight})`}
          >
            {children[2]}
          </Box>
        </Flex>
      </Flex>
      {children[3]}
      {children[4]}
    </>
  );
}
