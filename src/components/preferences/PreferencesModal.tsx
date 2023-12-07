import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import preferencesTabs from "data/typescript/preferencesTabs";

export default function PreferencesModal() {
  return (
    <Tabs isFitted isLazy >
      <TabList>
        {preferencesTabs.map((tab) => (
          <Tab>{tab.tab}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {preferencesTabs.map((tab) => (
          <TabPanel>{tab.panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
