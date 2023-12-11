import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectLanguage, setLanguage } from "redux/features/languageSlice";
import LanguageCodes from "utils/enums/LanguageCodes";
import Language from "utils/interfaces/common/Language";

interface LanguageHook {
  set: (value: LanguageCodes) => void;
  language: Language;
}

const useLanguage = (): LanguageHook => {
  const language = useSelector(selectLanguage);
  const d = useDispatch();

  const set = (value: LanguageCodes) => {
    d(setLanguage(value));
  };

  return { language: language, set: set };
};

export default useLanguage;
