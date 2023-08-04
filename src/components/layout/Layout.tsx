import { Flex } from "@chakra-ui/react";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";
import HeaderContainer from "./HeaderContainer";
import MainContainer from "./MainContainer";
import SidebarContainer from "./SidebarContainer";

export default function Layout({ children }: WithMultipleChildren) {
  const headerHeight = "80px";

  return (
    <>
      <Flex h="100vh" maxH="100vh" w="100%">
        <SidebarContainer>{children[1]}</SidebarContainer>
        <Flex flex={1} direction="column">
          <HeaderContainer headerHeight={headerHeight}>
            {children[0]}
          </HeaderContainer>
          <MainContainer headerHeight={headerHeight}>
            {children[2]}
          </MainContainer>
        </Flex>
      </Flex>
      {/* TodoCreateButton */}
      {children[3]}
      {/* TodoCreator */}
      {children[4]}
    </>
  );
}
