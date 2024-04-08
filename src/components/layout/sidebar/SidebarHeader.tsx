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
