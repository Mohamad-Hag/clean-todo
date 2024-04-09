import { TabPanel, TabPanels } from "@chakra-ui/react";
import preferencesPanels, {
  PreferencesPanel,
} from "data/typescript/preferencesPanels";
import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useLanguage from "hooks/useLanguage";

export default function PreferencesPanels() {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  let panels: PreferencesPanel[] = [...preferencesPanels];

  if (isMobile)
    panels = preferencesPanels.filter(
      (panel) => panel.title !== labels[language.code].shortcuts
    );

  return (
    <TabPanels>
      {panels.map((panel, index) => (
        <TabPanel key={index}>{panel.component}</TabPanel>
      ))}
    </TabPanels>
  );
}
