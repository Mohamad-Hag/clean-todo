import { useSelector } from "react-redux";
import { default as ICategory } from "../../utils/interfaces/common/Category";
import sidebarButtons from "../../data/sidebarButtons";
import Category from "./Category";
import {
  selectSidebarIsActiveArray,
  update,
} from "../../redux/features/sidebarIsActiveArraySlice";
import { useDispatch } from "react-redux";

interface CategoriesFilledListProps {
  categories: ICategory[];
}

export default function CategoriesFilledList({
  categories,
}: CategoriesFilledListProps) {
  const isActiveArray = useSelector(selectSidebarIsActiveArray);

  const d = useDispatch();

  const select = (index: number) => {
    d(update(index));
  };

  return (
    <>
      {categories.map((category, i) => (
        <Category
          key={category.id}
          id={category.id!}
          title={category.title!}
          icon={category.icon!}
          index={sidebarButtons.length + i}
          to={`/categories/category-${category.id}`}
          isActive={isActiveArray[sidebarButtons.length + i]}
          onSelect={select}
        />
      ))}
    </>
  );
}
