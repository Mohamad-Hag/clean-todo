import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOppositeStatus,
  selectSidebar,
} from "../../../redux/features/sidebarSlice";
import {
  activeStyle,
  hoverStyle,
} from "../../../utils/styles/SidebarButtonStyles";

export default function SidebarMenuButton() {
  const { status } = useSelector(selectSidebar);
  const d = useDispatch();

  const label = (status === "shown" ? "Hide" : "Show") + " Sidebar";
  const icon =
    status === "shown" ? (
      <FaArrowLeft color="white" />
    ) : (
      <FaBars color="white" />
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
