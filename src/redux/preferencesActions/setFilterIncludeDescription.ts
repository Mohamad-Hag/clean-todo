import { Preferences } from "redux/features/preferencesSlice";

function setFilterIncludeDescription(
  preferences: Preferences,
  includeDescription: boolean
) {
  preferences.filterPreferences!.includeDescription = includeDescription;
  return preferences;
}

export default setFilterIncludeDescription;
