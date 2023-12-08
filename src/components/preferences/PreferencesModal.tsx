import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import preferencesTabs from "data/typescript/preferencesTabs";

export default function PreferencesModal() {
  return (
    <Tabs isLazy variant="soft-rounded">
      <TabList
        className="flex flex-wrap p-2"
        border="3px solid #f2f2f2"
        borderTopWidth="0"
        borderX={0}
      >
        {preferencesTabs.map((tab) => (
          <Tab key={tab.tab}>{tab.tab}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {preferencesTabs.map((tab) => (
          <TabPanel key={tab.tab}>{tab.panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
