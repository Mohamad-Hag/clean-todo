import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import Logo from "../../Logo";
import SidebarHeaderContainer from "./SidebarHeaderContainer";
import SidebarLogo from "./SidebarLogo";
import SidebarMenuButton from "./SidebarMenuButton";

export default function SidebarHeader() {
  return (
    <SidebarHeaderContainer>
      <SidebarLogo />
      <SidebarMenuButton />
    </SidebarHeaderContainer>
  );
}
