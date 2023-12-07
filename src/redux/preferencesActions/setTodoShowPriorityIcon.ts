import { Preferences } from "redux/features/preferencesSlice";

function setTodoShowPriorityIcon(
  preferences: Preferences,
  alwaysShowPriorityIcon: boolean
) {
  preferences.todoPreferences!.alwaysShowPriorityIcon = alwaysShowPriorityIcon;
  return preferences;
}

export default setTodoShowPriorityIcon;
