import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import languages from "data/typescript/languages";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import LanguageCodes from "utils/enums/LanguageCodes";

export default function LanguageSettings() {
  const { language, set } = useLanguage();

  const languageChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    set(e.target.value as LanguageCodes);
  };

  return (
    <FormControl>
      <FormLabel>{labels[language.code].language}</FormLabel>
      <Select onChange={languageChanged} defaultValue={language.code}>
        {languages.map((lang) => (
          <option value={lang.code}>{lang.fullNameOrigin}</option>
        ))}
      </Select>
      <FormHelperText>{labels[language.code].causeReload}</FormHelperText>
    </FormControl>
  );
}
