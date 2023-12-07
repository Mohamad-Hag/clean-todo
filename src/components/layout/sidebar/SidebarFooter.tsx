import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import Perferences from "../../preferences/Preferences";

export default function SidebarFooter() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");

  return (
    <Box
      className="py-2 px-5 flex justify-end border-t-2"
      borderColor="#ffffff20"
      display={display("flex")}
    >
      <Perferences />
    </Box>
  );
}
