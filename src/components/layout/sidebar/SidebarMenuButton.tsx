import { IconButton, Tooltip } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useLanguage from "hooks/useLanguage";
import useTodoItemDrop from "hooks/useTodoItemDrop";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOppositeStatus,
  selectSidebar,
} from "redux/features/sidebarSlice";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";

export default function SidebarMenuButton() {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const { status } = useSelector(selectSidebar);
  const { drop } = useTodoItemDrop(undefined, true);
  const d = useDispatch();

  const label = isMobile
    ? null
    : (status === "shown"
        ? labels[language.code].hide
        : labels[language.code].show) +
      " " +
      labels[language.code].sidebar;
  const icon =
    status === "shown" ? (
      <FaArrowLeft color="white" />
    ) : (
      <FaBars color={isMobile ? "#555555" : "white"} />
    );

  const click = () => {
    d(changeOppositeStatus(status));
  };

  const draggedOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    d(changeOppositeStatus("hidden"));
  };

  return (
    <Tooltip label={label} hasArrow>
      <IconButton
        onDragOver={draggedOver}
        onDrop={drop}
        _hover={hoverStyle}
        _active={activeStyle}
        variant="ghost"
        aria-label="hide menu button"
        icon={icon}
        onClick={click}
      ></IconButton>
    </Tooltip>
  );
}
