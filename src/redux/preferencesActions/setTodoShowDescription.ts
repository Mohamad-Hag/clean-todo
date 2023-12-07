import { Preferences } from "redux/features/preferencesSlice";

function setTodoShowDescription(
  preferences: Preferences,
  alwaysShowDescription: boolean
) {
  preferences.todoPreferences!.alwaysShowDescription = alwaysShowDescription;
  return preferences;
}

export default setTodoShowDescription;
