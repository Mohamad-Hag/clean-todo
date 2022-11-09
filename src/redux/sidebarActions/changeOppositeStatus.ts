import { Sidebar, SidebarStatus } from "../features/sidebarSlice";

function changeOppositeStatus(sidebar: Sidebar, status: SidebarStatus) {
  sidebar.status = status === "hidden" ? "shown" : "hidden";
  return sidebar;
}

export default changeOppositeStatus;
