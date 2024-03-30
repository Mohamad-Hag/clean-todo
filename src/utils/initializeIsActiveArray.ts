import CategoryStore from "./local-storage/CategoryStore";
import IsActiveArrayConditionSatisfied from "./IsActiveArrayConditionSatisfied";
import { sidebarButtons } from "components/layout/sidebar/SidebarButtons";

const categories = CategoryStore.get();
const categoriesLength = categories.length;
const sidebarButtonsLength = sidebarButtons.length;
const isActiveArrayLength = sidebarButtonsLength + categoriesLength;

function initializeIsActiveArray(): boolean[] {
  return Array(isActiveArrayLength)
    .fill(false)
    .map((_, i) => IsActiveArrayConditionSatisfied(i));
}

export default initializeIsActiveArray;
