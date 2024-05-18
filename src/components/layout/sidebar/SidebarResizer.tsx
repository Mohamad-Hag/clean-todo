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
    <>
      <Box top="50%" transform="translateY(-50%)" className="w-[2px] shadow-sm absolute h-4 bg-gray-400 right-[2px] rounded-sm"/>
      <Box
        ref={resizerRef}
        transition=".3s"
        className="w-[4px] bg-blue-500 opacity-0 hover:opacity-100 active:opacity-100 cursor-ew-resize h-full absolute right-0"
      ></Box>
    </>
  );
}
