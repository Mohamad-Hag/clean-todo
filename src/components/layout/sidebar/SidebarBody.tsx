import { Box } from "@chakra-ui/react";
import { BiCheck, BiListUl, BiStar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../../redux/features/sidebarSlice";
import { ScrollbarThinStyle } from "../../../utils/styles/ScrollbarStyles";
import SidebarButton from "./SidebarButton";

export default function SidebarBody() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");

  return (
    <Box
      className={`flex-1 py-5 pr-3 ${ScrollbarThinStyle}`}
      display={display("initial")}
    >
      <SidebarButton icon={<BiListUl />} title="All Todos" isActive />
      <SidebarButton icon={<BiStar />} title="Active Todos" />
      <SidebarButton icon={<BiCheck />} title="Finished Todos" />
    </Box>
  );
}
