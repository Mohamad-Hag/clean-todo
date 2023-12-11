import PrivacyPanel from "components/preferences/panels/privact-panel/PrivacyPanel";
import BackgroundsPanel from "components/preferences/panels/backgrounds-panel/BackgroundsPanel";
import FilterPanel from "components/preferences/panels/filter-panel/FilterPanel";
import OtherPanel from "components/preferences/panels/other-panel/OtherPanel";
import ShortcutsPanel from "components/preferences/panels/shortcuts-panel/ShortcutsPanel";
import ThemePanel from "components/preferences/panels/theme-panel/ThemePanel";
import TodoPanel from "components/preferences/panels/todo-panel/TodoPanel";
import labels from "data/typescript/uiLabels";
import LanguageStore from "utils/local-storage/LanguageStore";

const language = LanguageStore.get();

const preferencesTabs = [
  {
    tab: labels[language.code].todo,
    panel: <TodoPanel />,
  },
  {
    tab: labels[language.code].filter,
    panel: <FilterPanel />,
  },
  {
    tab: labels[language.code].background,
    panel: <BackgroundsPanel />,
  },
  {
    tab: labels[language.code].shortcuts,
    panel: <ShortcutsPanel />,
  },
  {
    tab: labels[language.code].privacy,
    panel: <PrivacyPanel />,
  },
  {
    tab: labels[language.code].theme,
    panel: <ThemePanel />,
  },
  {
    tab: labels[language.code].other,
    panel: <OtherPanel />,
  },
];

export default preferencesTabs;
