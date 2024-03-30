import { Tab } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { isMobile } from "react-device-detect";

let preferencesTabs: string[] = [];

export default function PreferencesTabs() {
  const { language } = useLanguage();

  preferencesTabs = [
    labels[language.code].todo,
    labels[language.code].filter,
    labels[language.code].background,
    labels[language.code].shortcuts,
    labels[language.code].privacy,
    labels[language.code].theme,
    labels[language.code].other,
  ];

  if (isMobile)
    preferencesTabs = preferencesTabs.filter(
      (tab) => tab !== labels[language.code].shortcuts
    );

  return (
    <>
      {preferencesTabs.map((tab) => (
        <Tab key={tab}>{tab}</Tab>
      ))}
    </>
  );
}

export { preferencesTabs };
