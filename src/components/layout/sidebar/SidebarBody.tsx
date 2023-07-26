import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSidebarIsActiveArray,
  update,
} from "../../../redux/features/sidebarIsActiveArraySlice";
import { selectSidebar } from "../../../redux/features/sidebarSlice";
import { ScrollbarThinStyle } from "../../../utils/styles/ScrollbarStyles";
import SidebarButton from "./SidebarButton";
import SidebarCategoriesContainer from "./categories/SidebarCategoriesContainer";
import sidebarButtons from "./sidebarButtons";

export default function SidebarBody() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");

  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const d = useDispatch();

  const select = (index: number) => {
    d(update(index));
  };

  return (
    <Box
      className={`flex-1 py-5 pr-3 ${ScrollbarThinStyle}`}
      display={display("initial")}
    >
      {sidebarButtons.map((button, i) => (
        <SidebarButton
          key={i}
          index={i}
          icon={button.icon}
          title={button.title}
          isActive={isActiveArray[i]}
          onSelect={select}
          to={button.to}
        />
      ))}
      <SidebarCategoriesContainer />
    </Box>
  );
}
