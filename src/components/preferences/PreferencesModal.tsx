import { Tabs } from "@chakra-ui/react";
import PreferencesPanels from "./PreferencesPanels";
import PreferencesTabs from "./PreferencesTabs";

export default function PreferencesModal() {
  return (
    <Tabs isLazy variant="soft-rounded">
      <PreferencesTabs />
      <PreferencesPanels />
    </Tabs>
  );
}
