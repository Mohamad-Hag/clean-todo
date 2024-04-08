import FolderStore from "./local-storage/FolderStore";
import IsActiveArrayConditionSatisfied from "./IsActiveArrayConditionSatisfied";
import { sidebarButtons } from "components/layout/sidebar/SidebarButtons";

const folders = FolderStore.get();
const foldersLength = folders.length;
const sidebarButtonsLength = sidebarButtons.length;
const isActiveArrayLength = sidebarButtonsLength + foldersLength;

function initializeIsActiveArray(): boolean[] {
  return Array(isActiveArrayLength)
    .fill(false)
    .map((_, i) => IsActiveArrayConditionSatisfied(i));
}

export default initializeIsActiveArray;
