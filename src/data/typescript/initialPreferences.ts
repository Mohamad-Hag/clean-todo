import getBgs from "assets/getBgs";
import { Preferences } from "redux/features/preferencesSlice";

const bgs = getBgs();

const initialPreferences: Preferences = {
  background: bgs[0],
  filterPreferences: {
    includeFolder: false,
    includeDescription: true,
    includeDate: false,
  },
  todoPreferences: {
    alwaysShowDescription: true,
    alwaysShowPriorityIcon: true,
    editOnDoubleClick: true,
    collapseDescription: true,
    allowDrafts: true,
  },
};

export default initialPreferences;
