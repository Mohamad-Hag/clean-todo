import { Sidebar, SidebarStatus } from "redux/features/sidebarSlice";
import changeOppositeStatus from "redux/sidebarActions/changeOppositeStatus";
import changeStatus from "redux/sidebarActions/changeStatus";

class SidebarStore {
  public static storage = localStorage;
  private static initialSidebar: Sidebar = {
    status: "shown",
  };

  private static set(value: Sidebar) {
    this.storage.setItem("sidebar", JSON.stringify(value));
  }

  public static get(): Sidebar {
    if (!this.storage.getItem("sidebar")) this.set(this.initialSidebar);
    return JSON.parse(this.storage.getItem("sidebar") as string);
  }

  public static changeStatus(sidebar: Sidebar, status: SidebarStatus) {
    let side = changeStatus(sidebar, status);
    SidebarStore.set(side);
    return side;
  }

  public static changeOppositeStatus(sidebar: Sidebar, status: SidebarStatus) {
    let side = changeOppositeStatus(sidebar, status);
    SidebarStore.set(side);
    return side;
  }
}

export default SidebarStore;
