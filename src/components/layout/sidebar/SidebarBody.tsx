import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import { ScrollbarThinStyle } from "utils/styles/ScrollbarStyles";
import SidebarCategoriesContainer from "../../categories/CategoriesContainer";
import SidebarButtons from "./SidebarButtons";

export default function SidebarBody() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");

  return (
    <Box
      className={`flex-1 py-5 pr-3 ${ScrollbarThinStyle}`}
      display={display("initial")}
    >
      <SidebarButtons />
      <SidebarCategoriesContainer />
    </Box>
  );
}
