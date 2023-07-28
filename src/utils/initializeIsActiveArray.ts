import sidebarButtons from "../data/sidebarButtons";
import CategoryStore from "./CategoryStore";
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
