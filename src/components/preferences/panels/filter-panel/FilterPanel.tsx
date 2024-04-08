import {
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPreferences,
  setFilterIncludeFolder,
  setFilterIncludeDate,
  setFilterIncludeDescription,
} from "redux/features/preferencesSlice";

export default function FilterPanel() {
  const { language } = useLanguage();
  let preferences = useSelector(selectPreferences);
  let d = useDispatch();
  let includeDescription = preferences.filterPreferences?.includeDescription;
  let includeFolder = preferences.filterPreferences?.includeFolder;
  let includeDate = preferences.filterPreferences?.includeDate;

  const includeDescriptionChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    d(setFilterIncludeDescription(e.target.checked));
  };

  const includeFolderChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setFilterIncludeFolder(e.target.checked));
  };

  const includeDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setFilterIncludeDate(e.target.checked));
  };

  return (
    <Stack spacing="8">
      <FormControl>
        <Flex alignItems="center">
          <Checkbox
            isChecked={includeDescription}
            onChange={includeDescriptionChanged}
          >
            {labels[language.code].includeDescription}
          </Checkbox>
        </Flex>
        <FormHelperText>{labels[language.code].includeDescriptionDescription}</FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox isChecked={includeFolder} onChange={includeFolderChanged}>
          {labels[language.code].includeFolder}
        </Checkbox>
        <FormHelperText>{labels[language.code].includeFolderDescription}</FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox isChecked={includeDate} onChange={includeDateChanged}>
          {labels[language.code].includeDate}
        </Checkbox>
        <FormHelperText>{labels[language.code].includeDateDescription}</FormHelperText>
      </FormControl>
    </Stack>
  );
}
