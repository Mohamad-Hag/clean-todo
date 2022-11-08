import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import BackgroundsPanel from "./BackgroundsPanel";

export default function PerferencesModal() {
  return (
    <Tabs>
      <TabList>
        <Tab>Background</Tab>
        <Tab>Theme</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BackgroundsPanel />
        </TabPanel>
        <TabPanel>Not Supported Yet!</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
