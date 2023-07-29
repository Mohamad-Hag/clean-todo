import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/features/categorySlice";
import isEmpty from "../../utils/isEmpty";
import CategoriesEmptyList from "./CategoriesEmptyList";
import CategoriesFilledList from "./CategoriesFilledList";

export default function CategoriesList() {
  const categories = useSelector(selectCategories);

  return (
    <>
      {isEmpty(categories) ? (
        <CategoriesEmptyList />
      ) : (
        <CategoriesFilledList categories={categories} />
      )}
    </>
  );
}
