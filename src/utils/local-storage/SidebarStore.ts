import { Sidebar, SidebarStatus } from "redux/features/sidebarSlice";
import changeOppositeStatus from "redux/sidebarActions/changeOppositeStatus";
import changeStatus from "redux/sidebarActions/changeStatus";
import replaceSidebar from "redux/sidebarActions/replaceSidebar";

class SidebarStore {
  public static storage = localStorage;
  private static nameInStorage = "sidebar";
  private static initialSidebar: Sidebar = {
    status: "shown",
  };

  private static set(value: Sidebar) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): Sidebar {
    if (!this.storage.getItem(this.nameInStorage)) this.set(this.initialSidebar);
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static changeStatus(sidebar: Sidebar, status: SidebarStatus) {
    let side = changeStatus(sidebar, status);
    SidebarStore.set(side);
    return side;
  }

  public static replace(sidebar: Sidebar, newSidebar: Sidebar) {
    let side = replaceSidebar(sidebar, newSidebar);
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
