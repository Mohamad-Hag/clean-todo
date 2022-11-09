import { Flex, Stack } from "@chakra-ui/react";
import React, { memo } from "react";
import { BiCloud } from "react-icons/bi";

interface NoDataProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

let initialDescription =
  "Click on (+) button in the bottom-right corner to create new todo.";

function NoData({
  title = "Nothing to Show!",
  description = initialDescription,
  icon = <BiCloud className="fill-blue-500" size={45} />,
}: NoDataProps) {
  return (
    <Flex
      gap="2"
      align="center"
      direction="column"
      justify="center"
      className="text-center text-gray-500 p-5 select-none"
    >
      {icon}
      <Stack spacing="0.5">
        <h1 className="text-lg font-bold">{title}</h1>
        {description && <p>{description}</p>}
      </Stack>
    </Flex>
  );
}

export default memo(NoData);
