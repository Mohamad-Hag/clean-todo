import FolderStore from "./local-storage/FolderStore";
import IsActiveArrayConditionSatisfied from "./IsActiveArrayConditionSatisfied";
import sidebarButtonsBase from "data/typescript/sidebarButtonsBase";

const folders = FolderStore.get();
const foldersLength = folders.length;
const sidebarButtonsLength = sidebarButtonsBase.length;
const isActiveArrayLength = sidebarButtonsLength + foldersLength;

function initializeIsActiveArray(): boolean[] {
  return Array(isActiveArrayLength)
    .fill(false)
    .map((_, i) => IsActiveArrayConditionSatisfied(i));
}

export default initializeIsActiveArray;
