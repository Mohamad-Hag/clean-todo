import { Preferences } from "redux/features/preferencesSlice";

function setTodoEditOnDoubleClick(
  preferences: Preferences,
  editOnDoubleClick: boolean
) {
  preferences.todoPreferences!.editOnDoubleClick = editOnDoubleClick;
  return preferences;
}

export default setTodoEditOnDoubleClick;
