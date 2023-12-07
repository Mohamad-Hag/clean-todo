import { Preferences } from "redux/features/preferencesSlice";

function setFilterIncludeDate(preferences: Preferences, includeDate: boolean) {
  preferences.filterPreferences!.includeDate = includeDate;
  return preferences;
}

export default setFilterIncludeDate;
