import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { SidebarStatus } from "./Sidebar";

interface SidebarMenuButtonProps {
  onStatusChange?: (status: SidebarStatus) => void;
}

export default function SidebarMenuButton({
  onStatusChange,
}: SidebarMenuButtonProps) {
  const [isShown, setIsShown] = useState<boolean>(true);
  const label = (isShown ? "Hide" : "Show") + " Sidebar";
  const icon = isShown ? (
    <FaArrowLeft color="white" />
  ) : (
    <FaBars color="white" />
  );

  const click = () => {
    setIsShown(!isShown);
    let status: SidebarStatus = !isShown ? "shown" : "hidden";

    if (onStatusChange) onStatusChange(status);
  };

  return (
    <Tooltip label={label}>
      <IconButton
        _hover={{
          bg: "#ffffff20",
          color: "white",
        }}
        _active={{
          bg: "#ffffff60",
        }}
        variant="ghost"
        aria-label="hide menu button"
        icon={icon}
        onClick={click}
      ></IconButton>
    </Tooltip>
  );
}
