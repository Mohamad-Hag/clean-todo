import LanguageCodes from "utils/enums/LanguageCodes";

interface Language {
  code: LanguageCodes;
  fullNameEnglish: string;
  fullNameOrigin: string;
  direction: "rtl" | "ltr"
}

export default Language;
