import {
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  Stack,
} from "@chakra-ui/react";
import labels from "data/json/ui-labels.json";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPreferences,
  setFilterIncludeCategory,
  setFilterIncludeDate,
  setFilterIncludeDescription,
} from "redux/features/preferencesSlice";

export default function FilterPanel() {
  let preferences = useSelector(selectPreferences);
  let d = useDispatch();
  let includeDescription = preferences.filterPreferences?.includeDescription;
  let includeCategory = preferences.filterPreferences?.includeCategory;
  let includeDate = preferences.filterPreferences?.includeDate;

  const includeDescriptionChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    d(setFilterIncludeDescription(e.target.checked));
  };

  const includeCategoryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setFilterIncludeCategory(e.target.checked));
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
            {labels.includeDescription}
          </Checkbox>
        </Flex>
        <FormHelperText>{labels.includeDescriptionDescription}</FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox isChecked={includeCategory} onChange={includeCategoryChanged}>
          {labels.includeCategory}
        </Checkbox>
        <FormHelperText>{labels.includeCategoryDescription}</FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox isChecked={includeDate} onChange={includeDateChanged}>
          {labels.includeDate}
        </Checkbox>
        <FormHelperText>{labels.includeDateDescription}</FormHelperText>
      </FormControl>
    </Stack>
  );
}
