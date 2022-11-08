import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../redux/features/sidebarSlice";
import { WithChildren } from "../../utils/interfaces/WithChildren";

export default function SidebarContainer({ children }: WithChildren) {
  const { status } = useSelector(selectSidebar);
  const sidebarWidth = status === "shown" ? "80" : "14";

  return (
    <Box
      className=" relative z-30"
      w={sidebarWidth}
      transitionTimingFunction="ease-in-out"
      transition="width .3s"
    >
      {children}
    </Box>
  );
}
