import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarWrapper from "./SidebarWrapper";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </SidebarWrapper>
  );
}
