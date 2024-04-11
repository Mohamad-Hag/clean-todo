import { Box } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import { WithChildren } from "utils/interfaces/WithChildren";

export default function SidebarContainer({ children }: WithChildren) {
  const isMobile = useIsMobile();
  const { status } = useSelector(selectSidebar);
  const sidebarWidth = status === "shown" ? "80" : isMobile ? "0" : "14";
  const mobileStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    top: 0,
    zIndex: "1000",
    transition: "0s",
  };

  return (
    <Box
      style={isMobile ? mobileStyle : undefined}
      overflow="hidden"
      className=" relative z-30"
      w={sidebarWidth}
      minW={status === "hidden" ? sidebarWidth : undefined}
      transitionTimingFunction="ease-in-out"
      transition="width .3s"
    >
      {children}
    </Box>
  );
}
