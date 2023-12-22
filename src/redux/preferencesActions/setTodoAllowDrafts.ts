import { Preferences } from "redux/features/preferencesSlice";

function setTodoAllowDrafts(preferences: Preferences, allowDrafts: boolean) {
  preferences.todoPreferences!.allowDrafts = allowDrafts;
  return preferences;
}

export default setTodoAllowDrafts;
