import CreateCategoryButton from "./CreateCategoryButton";
import CategoriesList from "./CategoriesList";
import CategoriesWrapper from "./CategoriesWrapper";

export default function Categories() {
  return (
    <CategoriesWrapper>
      <CreateCategoryButton />
      <CategoriesList />
    </CategoriesWrapper>
  );
}
