import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSidebar } from "redux/features/sidebarSlice";
import { WithChildren } from "utils/interfaces/WithChildren";

export default function SidebarHeaderContainer({ children }: WithChildren) {
  const { status } = useSelector(selectSidebar);  

  return (
    <Flex
      className="border-b-2"
      borderColor="#ffffff20"
      p="5"
      h="80px"
      align="center"
      justify={status === "shown" ? "space-between" : "center"}
    >
      {children}
    </Flex>
  );
}
