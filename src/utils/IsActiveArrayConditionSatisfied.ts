import FolderStore from "./local-storage/FolderStore";
import getFolderIdByPath from "./getFolderIdByPath";
import isFolderPath from "./isFolderPath";
import sidebarButtonsBase from "data/typescript/sidebarButtonsBase";

const pathname = window.location.pathname;
const folders = FolderStore.get();
const sidebarButtonsLength = sidebarButtonsBase.length;

function IsActiveArrayConditionSatisfied(index: number): boolean {
  if (isFolderPath(pathname)) {
    let folderId = getFolderIdByPath(pathname);
    let folderIndex = folders.findIndex((folder) => folder.id === folderId);
    let folderIndexInArray = folderIndex + sidebarButtonsLength;
    return index === folderIndexInArray;
  } else {
    let sidebarButtonIndex = sidebarButtonsBase.findIndex(
      (sidebarButtonBase) => sidebarButtonBase.to === pathname
    );
      
    return index === sidebarButtonIndex;
  }
}

export default IsActiveArrayConditionSatisfied;
