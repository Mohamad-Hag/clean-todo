import sidebarButtons from "data/typescript/sidebarButtons";
import CategoryStore from "./local-storage/CategoryStore";
import IsActiveArrayConditionStatisfied from "./IsActiveArrayConditionStatisfied";

const categories = CategoryStore.get();
const categoriesLength = categories.length;
const sidebarButtonsLength = sidebarButtons.length;
const isActiveArrayLength = sidebarButtonsLength + categoriesLength;

function initializeIsActiveArray(): boolean[] {
  return Array(isActiveArrayLength)
    .fill(false)
    .map((_, i) => IsActiveArrayConditionStatisfied(i));
}

export default initializeIsActiveArray;
