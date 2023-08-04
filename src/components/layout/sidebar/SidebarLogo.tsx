import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import Logo from "../../Logo";

export default function SidebarLogo() {
  const { status } = useSelector(selectSidebar);
  const display = (value: string) => (status === "shown" ? value : "none");

  return (
    <Box display={display("initial")}>
      <Logo />
    </Box>
  );
}
