import PrivacyPanel from "components/preferences/panels/privact-panel/PrivacyPanel";
import BackgroundsPanel from "components/preferences/panels/backgrounds-panel/BackgroundsPanel";
import FilterPanel from "components/preferences/panels/filter-panel/FilterPanel";
import OtherPanel from "components/preferences/panels/other-panel/OtherPanel";
import ShortcutsPanel from "components/preferences/panels/shortcuts-panel/ShortcutsPanel";
import ThemePanel from "components/preferences/panels/theme-panel/ThemePanel";
import TodoPanel from "components/preferences/panels/todo-panel/TodoPanel";
import labels from "data/json/ui-labels.json";

const preferencesTabs = [
  {
    tab: labels.todo,
    panel: <TodoPanel />,
  },
  {
    tab: labels.filter,
    panel: <FilterPanel />,
  },
  {
    tab: labels.background,
    panel: <BackgroundsPanel />,
  },
  {
    tab: labels.shortcuts,
    panel: <ShortcutsPanel />,
  },
  {
    tab: labels.privacy,
    panel: <PrivacyPanel />,
  },
  {
    tab: labels.theme,
    panel: <ThemePanel />,
  },
  {
    tab: labels.other,
    panel: <OtherPanel />,
  },
];

export default preferencesTabs;
