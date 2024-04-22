import { URLString } from "components/layout/sidebar/SidebarButton";

interface SidebarButtonBase {
  to: URLString;
  icon: React.ReactElement;
  isDroppable: boolean;
}

export default SidebarButtonBase;
