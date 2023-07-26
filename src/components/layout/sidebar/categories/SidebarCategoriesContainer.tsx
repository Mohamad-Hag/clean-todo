import SidebarCategories from "./SidebarCategories";
import CategoryCreator from "./category-creation/CategoryCreator";

export default function SidebarCategoriesContainer() {
  return (
    <>
      <CategoryCreator />
      <SidebarCategories />
    </>
  );
}
