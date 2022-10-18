import { Box } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode[] | React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <Box className={`bg-white pt-0 pb-4 rounded-md shadow-lg overflow-hidden`}>
      {children}
    </Box>
  );
}
