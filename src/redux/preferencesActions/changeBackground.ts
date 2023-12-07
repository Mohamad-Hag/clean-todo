import { Preferences } from "../features/preferencesSlice";

function changeBackground(preferences: Preferences, background: string) {
  preferences.background = background;
  return preferences;
}

export default changeBackground;
