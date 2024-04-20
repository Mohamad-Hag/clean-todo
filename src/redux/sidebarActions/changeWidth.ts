import { Sidebar } from "../features/sidebarSlice";

function changeWidth(sidebar: Sidebar, width: number) {
  sidebar.width = width;
  return sidebar;
}

export default changeWidth;
