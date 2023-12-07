import { Preferences } from "redux/features/preferencesSlice";

function setTodoCollapseDescription(
  preferences: Preferences,
  collapseDescription: boolean
) {
  preferences.todoPreferences!.collapseDescription = collapseDescription;
  return preferences;
}

export default setTodoCollapseDescription;
