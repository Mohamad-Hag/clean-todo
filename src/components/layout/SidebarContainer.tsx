import { Box } from "@chakra-ui/react";
import useSetSidebarDimensions from "hooks/useSetSidebarDimensions";
import useSetSidebarStyle from "hooks/useSetSidebarStyle";
import { useRef } from "react";
import { WithChildren } from "utils/interfaces/WithChildren";
import SidebarResizer from "./sidebar/SidebarResizer";

export default function SidebarContainer({ children }: WithChildren) {
  const sidebarRef = useRef<HTMLDivElement>(null!);
  const style = useSetSidebarStyle();
  const { maxWidth, minWidth, width } = useSetSidebarDimensions();

  return (
    <Box
      style={style}
      ref={sidebarRef}
      className=" relative z-30 flex overflow-hidden"
      w={width}
      minW={minWidth}
      maxW={maxWidth}
      transitionTimingFunction="ease-in-out"
      transition="width .3s"
    >
      {children}

      <SidebarResizer sidebarRef={sidebarRef} />
    </Box>
  );
}
