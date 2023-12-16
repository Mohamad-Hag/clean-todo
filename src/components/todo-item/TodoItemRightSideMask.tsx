import { Flex } from "@chakra-ui/react";
import SmallIconButton from "components/SmallIconButton";
import useIsMobile from "hooks/useIsMobile";
import { useState } from "react";
import { BiDotsVertical, BiX } from "react-icons/bi";
import { WithChildren } from "utils/interfaces/WithChildren";

export default function TodoItemRightSideMask({ children }: WithChildren) {
  const isMobile = useIsMobile();
  const [isShowControls, setIsShowControls] = useState<boolean>(false);

  const showControls = () => {
    setIsShowControls(!isShowControls);
  };

  return (
    <Flex flexDirection={isMobile ? "column" : "row"} alignItems="center">
      {isMobile ? (
        <SmallIconButton
          variant={isShowControls ? "solid" : "ghost"}
          icon={isShowControls ? <BiX /> : <BiDotsVertical />}
          label="todo controls"
          onClick={showControls}
        />
      ) : (
        children
      )}
      {isShowControls && children}
    </Flex>
  );
}
