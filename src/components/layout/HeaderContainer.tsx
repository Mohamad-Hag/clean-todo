import { Box } from "@chakra-ui/react";
import { WithChildren } from "utils/interfaces/WithChildren";

interface HeaderContainerProps extends WithChildren {    
    headerHeight: string;
}

export default function HeaderContainer({
  children,
  headerHeight,
}: HeaderContainerProps) {
  return (
    <Box h={headerHeight} className="relative z-20">
      {children}
    </Box>
  );
}
