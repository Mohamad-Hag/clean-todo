import { Sidebar, SidebarStatus } from "../features/sidebarSlice";

function replaceSidebar(sidebar: Sidebar, newSidebar: Sidebar) {
  sidebar = newSidebar;
  return sidebar;
}

export default replaceSidebar;
