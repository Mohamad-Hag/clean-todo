import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../../redux/features/categorySlice";
import {
  selectSidebarIsActiveArray,
  update,
} from "../../../../redux/features/sidebarIsActiveArraySlice";
import NoData from "../../../common/NoData";
import sidebarButtons from "../sidebarButtons";
import SidebarCategory from "./SidebarCategory";

export default function SidebarCategoriesInner() {
  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const categories = useSelector(selectCategories);
  const d = useDispatch();

  const select = (index: number) => {
    d(update(index));
  };

  return (
    <>
      {categories.length === 0 ? (
        <NoData description="" textColor="#ffffff50" iconColor="white" />
      ) : (
        categories.map((category, i) => (
          <SidebarCategory
            key={category.id}
            id={category.id!}
            title={category.title!}
            icon={category.icon!}
            index={sidebarButtons.length + i}
            to={`category-${category.id}`}
            isActive={isActiveArray[sidebarButtons.length + i]}
            onSelect={select}
          />
        ))
      )}
    </>
  );
}
