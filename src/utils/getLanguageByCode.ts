import languages from "data/typescript/languages";
import LanguageCodes from "./enums/LanguageCodes";
import Language from "./interfaces/common/Language";

function getLanguageByCode(code: LanguageCodes): Language {
  return languages.find((language) => language.code === code)!;
}

export default getLanguageByCode;
