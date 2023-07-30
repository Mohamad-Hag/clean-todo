import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import BackgroundsPanel from "./panels/backgrounds-panel/BackgroundsPanel";
import ThemePanel from "./panels/theme-panel/ThemePanel";

export default function PerferencesModal() {
  return (
    <Tabs animation="none">
      <TabList>
        <Tab>Theme</Tab>
        <Tab>Background</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ThemePanel />
        </TabPanel>
        <TabPanel>
          <BackgroundsPanel />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
