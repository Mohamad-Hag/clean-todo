import { Preferences } from "redux/features/preferencesSlice";

function setFilterIncludeFolder(
  preferences: Preferences,
  includeFolder: boolean
) {
  preferences.filterPreferences!.includeFolder = includeFolder;
  return preferences;
}

export default setFilterIncludeFolder;
