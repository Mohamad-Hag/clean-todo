import { Preferences } from "redux/features/preferencesSlice";

function setFilterIncludeCategory(
  preferences: Preferences,
  includeCategory: boolean
) {
  preferences.filterPreferences!.includeCategory = includeCategory;
  return preferences;
}

export default setFilterIncludeCategory;
