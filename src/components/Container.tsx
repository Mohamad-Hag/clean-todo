import { Box } from "@chakra-ui/react";
import { WithMultipleChildren } from "../utils/interfaces/WithChildren";

export default function Container({ children }: WithMultipleChildren) {
  return (
    <Box
      tabIndex={0}
      outline="none"
      className={`bg-white pt-0 pb-4 rounded-md shadow-lg overflow-hidden`}
    >
      {children}
    </Box>
  );
}
