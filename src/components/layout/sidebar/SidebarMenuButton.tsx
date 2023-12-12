import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOppositeStatus,
  selectSidebar,
} from "redux/features/sidebarSlice";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { isMobile } from "react-device-detect";

export default function SidebarMenuButton() {
  const { language } = useLanguage();
  const { status } = useSelector(selectSidebar);
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

  return (
    <Tooltip label={label} hasArrow>
      <IconButton
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
