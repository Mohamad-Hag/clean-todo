import { Preferences } from "../features/preferencesSlice";

function replacePreferences(
  preferences: Preferences,
  newPreferences: Preferences
) {
  preferences = newPreferences;
  return preferences;
}

export default replacePreferences;
