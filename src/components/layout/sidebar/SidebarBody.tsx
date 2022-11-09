import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectSidebar } from "../../../redux/features/sidebarSlice";
import { ScrollbarThinStyle } from "../../../utils/styles/ScrollbarStyles";
import SidebarButton from "./SidebarButton";
import sidebarButtons from "./sidebarButtons";

export default function SidebarBody() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");
  const { pathname } = useLocation();
  let index = sidebarButtons.findIndex((button) => button.to === pathname);

  const initialize = () =>
    Array(sidebarButtons.length)
      .fill(false)
      .map((_, i) => i === index);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

  const select = (index: number) => {
    let activeArray = [...isActiveArray];
    let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
    activeArray[activeBackgroundIndex] = false;
    activeArray[index] = true;
    setIsActiveArray(activeArray);
  };

  return (
    <Box
      className={`flex-1 py-5 pr-3 ${ScrollbarThinStyle}`}
      display={display("initial")}
    >
      {sidebarButtons.map((button, i) => (
        <SidebarButton
          index={i}
          icon={button.icon}
          title={button.title}
          isActive={isActiveArray[i]}
          onSelect={select}
          to={button.to}
        />
      ))}
    </Box>
  );
}
