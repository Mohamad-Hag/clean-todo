import { Tab, TabList } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useLanguage from "hooks/useLanguage";

export default function PreferencesTabs() {
  const { language } = useLanguage();
  const isMobile = useIsMobile();

  let preferencesTabs: string[] = [
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
    <TabList
      className="flex flex-wrap p-2"
      border="3px solid #f2f2f2"
      borderTopWidth="0"
      borderX={0}
    >
      {preferencesTabs.map((tab) => (
        <Tab key={tab}>{tab}</Tab>
      ))}
    </TabList>
  );
}
