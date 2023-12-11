import LanguageCodes from "utils/enums/LanguageCodes";
import getLanguageByCode from "utils/getLanguageByCode";
import Language from "utils/interfaces/common/Language";

class LanguageStore {
  public static storage = localStorage;
  private static nameInStorage = "language";

  private static set(value: Language) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): Language {
    if (!this.storage.getItem(this.nameInStorage))
      this.set(getLanguageByCode(LanguageCodes.ENGLISH));
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static setLanguage(
    language: Language,
    value: LanguageCodes
  ): Language {
    language.code = value;
    this.set(language);
    return language;
  }
}

export default LanguageStore;
