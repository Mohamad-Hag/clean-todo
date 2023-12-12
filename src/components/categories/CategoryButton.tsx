import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openAsEdit } from "redux/features/categoryFormSlice";
import getCategoryIconByTitle from "utils/getCategoryIconByTitle";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";
import { URLString } from "components/layout/sidebar/SidebarButton";
import CategoryButtonContent from "./CategoryButtonContent";
import { isMobile } from "react-device-detect";
import { changeOppositeStatus } from "redux/features/sidebarSlice";

export interface CategoryButtonProps {
  id: number;
  icon: string;
  title: string;
  to: URLString;
  isActive?: boolean;
  onSelect?: (index: number) => void;
  index: number;
}

export default function CategoryButton({
  id,
  icon,
  title,
  to,
  isActive = false,
  onSelect,
  index,
}: CategoryButtonProps) {
  const categoryIcon = getCategoryIconByTitle(icon);
  const background = isActive ? "blue.100" : "transparent";
  const color = isActive ? "black" : "white";
  const d = useDispatch();

  const edit = () => {
    d(
      openAsEdit({
        id: id,
        title: title,
        icon: icon,
      })
    );
  };

  const select = () => {
    if (onSelect) {
      onSelect(index);
      if (isMobile) d(changeOppositeStatus("shown"));
    }
  };

  return (
    <Link to={to} className="flex-1">
      <Button
        className="w-full text-left pl-5 text-white"
        borderRadius="0.5rem"
        fontWeight="normal"
        leftIcon={categoryIcon}
        h="2.5rem"
        justifyContent="flex-start"
        bg={background}
        color={color}
        _hover={hoverStyle}
        _active={activeStyle}
        onClick={select}
        onDoubleClick={edit}
      >
        <CategoryButtonContent id={id} title={title} />
      </Button>
    </Link>
  );
}
