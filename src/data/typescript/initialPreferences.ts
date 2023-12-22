import bgs from "assets/bgs";
import { Preferences } from "redux/features/preferencesSlice";

const initialPreferences: Preferences = {
  background: bgs[0],
  filterPreferences: {
    includeCategory: false,
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
