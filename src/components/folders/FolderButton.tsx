import { Button } from "@chakra-ui/react";
import { URLString } from "components/layout/sidebar/SidebarButton";
import useFolderButtonDrop from "hooks/useFolderButtonDrop";
import useIsMobile from "hooks/useIsMobile";
import useTodoItemDrop from "hooks/useTodoItemDrop";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openAsEdit } from "redux/features/folderFormSlice";
import { changeOppositeStatus } from "redux/features/sidebarSlice";
import getFolderIconByTitle from "utils/getFolderIconByTitle";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";
import FolderButtonContent from "./FolderButtonContent";
import { selectAll } from "redux/features/todosSlice";

export interface FolderButtonProps {
  id: number;
  icon: string;
  title: string;
  to: URLString;
  isActive?: boolean;
  onSelect?: (index: number) => void;
  index: number;
}

export default function FolderButton({
  id,
  icon,
  title,
  to,
  isActive = false,
  onSelect,
  index,
}: FolderButtonProps) {
  const isMobile = useIsMobile();
  const folderIcon = getFolderIconByTitle(icon);
  const folderDrop = useFolderButtonDrop(id);
  const { dragLeave, dragOver, drop, dropBorder } = useTodoItemDrop(folderDrop);
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
      d(selectAll({ isSelectAll: false }));
    }
  };

  return (
    <Link to={to} className="flex-1">
      <Button
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDrop={drop}
        border={dropBorder}
        className="w-full text-left pl-5 text-white"
        borderRadius="0.5rem"
        fontWeight="normal"
        leftIcon={folderIcon}
        h="2.5rem"
        justifyContent="flex-start"
        bg={background}
        color={color}
        _hover={hoverStyle}
        _active={activeStyle}
        onClick={select}
        onDoubleClick={edit}
      >
        <FolderButtonContent id={id} title={title} />
      </Button>
    </Link>
  );
}
