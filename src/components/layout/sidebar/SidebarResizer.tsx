import { Box } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import useResizeSidebar from "hooks/useResizeSidebar";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";

interface SidebarResizerProps {
  sidebarRef: React.MutableRefObject<HTMLDivElement>;
}

export default function SidebarResizer({ sidebarRef }: SidebarResizerProps) {
  const { status } = useSelector(selectSidebar);
  const resizerRef = useRef<HTMLDivElement>(null!);
  const isMobile = useIsMobile();
  const isShown = !isMobile && status === "shown";

  useResizeSidebar(resizerRef, sidebarRef);

  return !isShown ? (
    <></>
  ) : (
    <Box
      ref={resizerRef}
      className="w-[3px] hover:bg-blue-500 active:bg-blue-500 cursor-ew-resize h-full absolute right-0"
    ></Box>
  );
}
