import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import languages from "data/typescript/languages";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import LanguageCodes from "utils/enums/LanguageCodes";

export default function LanguageSettings() {
  const { language, set } = useLanguage();
  const d = useDispatch();

  const languageChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    set(e.target.value as LanguageCodes);
    d(close());
  };

  return (
    <FormControl>
      <FormLabel>{labels[language.code].language}</FormLabel>
      <Select onChange={languageChanged} defaultValue={language.code}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.fullNameOrigin}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
