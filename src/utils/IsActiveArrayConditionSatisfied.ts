import CategoryStore from "./local-storage/CategoryStore";
import getCategoryIdByPath from "./getCategoryIdByPath";
import isCategoryPath from "./isCategoryPath";
import { sidebarButtons } from "components/layout/sidebar/SidebarButtons";

const pathname = window.location.pathname;
const categories = CategoryStore.get();
const sidebarButtonsLength = sidebarButtons.length;

function IsActiveArrayConditionSatisfied(index: number): boolean {
  if (isCategoryPath(pathname)) {
    let categoryId = getCategoryIdByPath(pathname);
    let categoryIndex = categories.findIndex(
      (category) => category.id === categoryId
    );
    let categoryIndexInArray = categoryIndex + sidebarButtonsLength;
    return index === categoryIndexInArray;
  } else {
    let sidebarButtonIndex = sidebarButtons.findIndex(
      (sidebarButton) => sidebarButton.to === pathname
    );
    return index === sidebarButtonIndex;
  }
}

export default IsActiveArrayConditionSatisfied;
