import { Flex, Stack } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import React, { memo } from "react";
import { BiCloud } from "react-icons/bi";

export interface NoDataProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  textColor?: string;
  iconColor?: string;
}

function NoData(props: NoDataProps) {
  const { language } = useLanguage();
  const initialDescription = labels[language.code].clickOnButtonToCreateTodo;
  const initialTitle = labels[language.code].nothingToShow;
  const {
    title = initialTitle,
    description = initialDescription,
    iconColor = "#3b82f6",
    icon = <BiCloud fill={iconColor} size={45} />,
    textColor,
  } = props;

  return (
    <Flex
      gap="2"
      align="center"
      direction="column"
      justify="center"
      className={`text-center text-gray-500 p-5 select-none`}
      color={textColor}
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
