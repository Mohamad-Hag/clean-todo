import BackgroundsPanel from "components/preferences/panels/backgrounds-panel/BackgroundsPanel";
import FilterPanel from "components/preferences/panels/filter-panel/FilterPanel";
import OtherPanel from "components/preferences/panels/other-panel/OtherPanel";
import PrivacyPanel from "components/preferences/panels/privacy-panel/PrivacyPanel";
import ShortcutsPanel from "components/preferences/panels/shortcuts-panel/ShortcutsPanel";
import ThemePanel from "components/preferences/panels/theme-panel/ThemePanel";
import TodoPanel from "components/preferences/panels/todo-panel/TodoPanel";

export interface PreferencesPanel {
  title: string;
  component: JSX.Element;
}

let preferencesPanels: PreferencesPanel[] = [
  {
    title: "Todo",
    component: <TodoPanel />,
  },
  {
    title: "Filter",
    component: <FilterPanel />,
  },
  {
    title: "Background",
    component: <BackgroundsPanel />,
  },
  {
    title: "Shortcuts",
    component: <ShortcutsPanel />,
  },
  {
    title: "Privacy",
    component: <PrivacyPanel />,
  },
  {
    title: "Theme",
    component: <ThemePanel />,
  },
  {
    title: "Other",
    component: <OtherPanel />,
  },
];

export default preferencesPanels;
