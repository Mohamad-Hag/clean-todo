import { TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import preferencesPanels from "data/typescript/preferencesPanels";
import PreferencesTabs from "./PreferencesTabs";

export default function PreferencesModal() {
  return (
    <Tabs isLazy variant="soft-rounded">
      <TabList
        className="flex flex-wrap p-2"
        border="3px solid #f2f2f2"
        borderTopWidth="0"
        borderX={0}
      >
        <PreferencesTabs />
      </TabList>
      <TabPanels>
        {preferencesPanels.map((panel, index) => (
          <TabPanel key={index}>{panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
