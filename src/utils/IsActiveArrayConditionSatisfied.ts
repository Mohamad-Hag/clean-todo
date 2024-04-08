import FolderStore from "./local-storage/FolderStore";
import getFolderIdByPath from "./getFolderIdByPath";
import isFolderPath from "./isFolderPath";
import { sidebarButtons } from "components/layout/sidebar/SidebarButtons";

const pathname = window.location.pathname;
const folders = FolderStore.get();
const sidebarButtonsLength = sidebarButtons.length;

function IsActiveArrayConditionSatisfied(index: number): boolean {
  if (isFolderPath(pathname)) {
    let folderId = getFolderIdByPath(pathname);
    let folderIndex = folders.findIndex(
      (folder) => folder.id === folderId
    );
    let folderIndexInArray = folderIndex + sidebarButtonsLength;
    return index === folderIndexInArray;
  } else {
    let sidebarButtonIndex = sidebarButtons.findIndex(
      (sidebarButton) => sidebarButton.to === pathname
    );
    return index === sidebarButtonIndex;
  }
}

export default IsActiveArrayConditionSatisfied;
