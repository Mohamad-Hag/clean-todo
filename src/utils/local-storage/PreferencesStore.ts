import initialPreferences from "data/typescript/initialPreferences";
import { Preferences } from "redux/features/preferencesSlice";
import replacePreferences from "redux/preferencesActions/replacePreferences";
import changeBackground from "redux/preferencesActions/changeBackground";
import setFilterIncludeFolder from "redux/preferencesActions/setFilterIncludeFolder";
import setFilterIncludeDate from "redux/preferencesActions/setFilterIncludeDate";
import setFilterIncludeDescription from "redux/preferencesActions/setFilterIncludeDescription";
import setTodoCollapseDescription from "redux/preferencesActions/setTodoCollapseDescription";
import setTodoEditOnDoubleClick from "redux/preferencesActions/setTodoEditOnDoubleClick";
import setTodoShowDescription from "redux/preferencesActions/setTodoShowDescription";
import setTodoShowPriorityIcon from "redux/preferencesActions/setTodoShowPriorityIcon";
import setTodoAllowDrafts from "redux/preferencesActions/setTodoAllowDrafts";

class PreferencesStore {
  public static storage = localStorage;
  private static nameInStorage = "preferences";
  private static initialPreferences: Preferences = initialPreferences;

  private static set(value: Preferences) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): Preferences {
    if (!this.storage.getItem(this.nameInStorage))
      this.set(this.initialPreferences);
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static changeBackground(preferences: Preferences, background: string) {
    let prefs = changeBackground(preferences, background);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static replace(preferences: Preferences, newPreferences: Preferences) {
    let prefs = replacePreferences(preferences, newPreferences);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setFilterIncludeFolder(
    preferences: Preferences,
    includeFolder: boolean
  ) {
    let prefs = setFilterIncludeFolder(preferences, includeFolder);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setFilterIncludeDescription(
    preferences: Preferences,
    includeDescription: boolean
  ) {
    let prefs = setFilterIncludeDescription(preferences, includeDescription);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setFilterIncludeDate(
    preferences: Preferences,
    includeDate: boolean
  ) {
    let prefs = setFilterIncludeDate(preferences, includeDate);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setTodoShowDescription(
    preferences: Preferences,
    alwaysShowDescription: boolean
  ) {
    let prefs = setTodoShowDescription(preferences, alwaysShowDescription);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setTodoShowPriorityIcon(
    preferences: Preferences,
    alwaysShowPriorityIcon: boolean
  ) {
    let prefs = setTodoShowPriorityIcon(preferences, alwaysShowPriorityIcon);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setTodoEditOnDoubleClick(
    preferences: Preferences,
    editOnDoubleClick: boolean
  ) {
    let prefs = setTodoEditOnDoubleClick(preferences, editOnDoubleClick);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setTodoCollapseDescription(
    preferences: Preferences,
    collapseDescription: boolean
  ) {
    let prefs = setTodoCollapseDescription(preferences, collapseDescription);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static setTodoAllowDrafts(
    preferences: Preferences,
    allowDrafts: boolean
  ) {
    let prefs = setTodoAllowDrafts(preferences, allowDrafts);
    PreferencesStore.set(prefs);
    return prefs;
  }

  public static resetPreferences(preferences: Preferences) {
    PreferencesStore.set(this.initialPreferences);
    preferences = this.initialPreferences;
    return preferences;
  }
}

export default PreferencesStore;
