import { Box } from "@chakra-ui/react";
import { WithChildren } from "utils/interfaces/WithChildren";
import { ScrollbarStyle } from "utils/styles/ScrollbarStyles";

interface MainContainerProps extends WithChildren {
  headerHeight: string;
}

export default function MainContainer({
  children,
  headerHeight,
}: MainContainerProps) {
  return (
    <Box
      className={`relative z-40 flex-1 pb-5 px-5 opacity-90 ${ScrollbarStyle}`}
      h={`calc(100vh - ${headerHeight})`}
    >
      {children}
    </Box>
  );
}
