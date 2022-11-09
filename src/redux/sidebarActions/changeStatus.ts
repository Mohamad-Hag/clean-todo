import { Sidebar, SidebarStatus } from "../features/sidebarSlice";

function changeStatus(sidebar: Sidebar, status: SidebarStatus) {
  sidebar.status = status;
  return sidebar;
}

export default changeStatus;
