import LanguageCodes from "utils/enums/LanguageCodes";
import Language from "utils/interfaces/common/Language";

const languages: Language[] = [
  {
    code: LanguageCodes.ENGLISH,
    fullNameEnglish: "English",
    fullNameOrigin: "English",
    direction: "ltr",
  },
  {
    code: LanguageCodes.FRENCH,
    fullNameEnglish: "French",
    fullNameOrigin: "Français",
    direction: "ltr",
  },
  {
    code: LanguageCodes.SPANISH,
    fullNameEnglish: "Spanish ",
    fullNameOrigin: "Español",
    direction: "ltr",
  },
  {
    code: LanguageCodes.CHINESE,
    fullNameEnglish: "Chinese",
    fullNameOrigin: "中国人",
    direction: "ltr",
  },
];

export default languages;
