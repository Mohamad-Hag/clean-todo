import { Flex, Stack } from "@chakra-ui/react";
import React, { memo } from "react";
import { BiCloud } from "react-icons/bi";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import LanguageStore from "utils/local-storage/LanguageStore";

export interface NoDataProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  textColor?: string;
  iconColor?: string;
}

const lang = LanguageStore.get();

let initialDescription = labels[lang.code].clickOnButtonToCreateTodo;

function NoData({
  title = labels[lang.code].nothingToShow,
  description = initialDescription,
  iconColor = "#3b82f6",
  icon = <BiCloud fill={iconColor} size={45} />,
  textColor,
}: NoDataProps) {
  const { language } = useLanguage();

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
