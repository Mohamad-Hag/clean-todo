import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { BiCheck, BiListUl, BiStar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../../redux/features/sidebarSlice";
import { ScrollbarThinStyle } from "../../../utils/styles/ScrollbarStyles";
import SidebarButton from "./SidebarButton";

export default function SidebarBody() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");
  const [isActiveArray, setIsActiveArray] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

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
      <SidebarButton
        index={0}
        icon={<BiListUl />}
        title="All Todos"
        isActive={isActiveArray[0]}
        onSelect={select}
        to="/"
      />
      <SidebarButton
        index={1}
        isActive={isActiveArray[1]}
        icon={<BiStar />}
        title="Active Todos"
        onSelect={select}
        to="/active"
      />
      <SidebarButton
        index={2}
        isActive={isActiveArray[2]}
        icon={<BiCheck />}
        title="Finished Todos"
        to="/finished"
        onSelect={select}
      />
    </Box>
  );
}
