import { Box } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { WithChildren } from "utils/interfaces/WithChildren";
import { ScrollbarStyle } from "utils/styles/ScrollbarStyles";

interface MainContainerProps extends WithChildren {
  headerHeight: string;
}

export default function MainContainer({
  children,
  headerHeight,
}: MainContainerProps) {
  const paddingX = isMobile ? "2" : "5";

  return (
    <Box
      className={`relative z-40 flex-1 pb-5 px-${paddingX} opacity-90 ${ScrollbarStyle}`}
      h={`calc(100vh - ${headerHeight})`}
    >
      {children}
    </Box>
  );
}
