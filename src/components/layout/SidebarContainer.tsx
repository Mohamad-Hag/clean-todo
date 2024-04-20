import { Box } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import { WithChildren } from "utils/interfaces/WithChildren";
import SidebarResizer from "./sidebar/SidebarResizer";

export default function SidebarContainer({ children }: WithChildren) {
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null!);
  const { status, width } = useSelector(selectSidebar);

  const sidebarWidth = status === "shown" ? width : isMobile ? "0" : "14";
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
      ref={sidebarRef}
      className=" relative z-30 flex overflow-hidden"
      w={sidebarWidth}
      minW={status === "hidden" ? sidebarWidth : undefined}
      transitionTimingFunction="ease-in-out"
      transition="width .3s"
    >
      {children}

      <SidebarResizer sidebarRef={sidebarRef} />
    </Box>
  );
}
