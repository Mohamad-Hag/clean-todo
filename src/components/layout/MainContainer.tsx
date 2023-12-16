import { Box } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import { WithChildren } from "utils/interfaces/WithChildren";
import { ScrollbarStyle } from "utils/styles/ScrollbarStyles";

interface MainContainerProps extends WithChildren {
  headerHeight: string;
}

export default function MainContainer({
  children,
  headerHeight,
}: MainContainerProps) {
  const isMobile = useIsMobile();
  const paddingX = isMobile ? "2" : "5";

  return (
    <Box
      className={`relative z-40 flex-1 pb-5 px-${paddingX} opacity-95 ${ScrollbarStyle}`}
      h={`calc(100vh - ${headerHeight})`}
    >
      {children}
    </Box>
  );
}
