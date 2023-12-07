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
  setTodoCollapseDescription,
  setTodoEditOnDoubleClick,
  setTodoShowDescription,
  setTodoShowPriorityIcon,
} from "redux/features/preferencesSlice";

export default function TodoPanel() {
  let preferences = useSelector(selectPreferences);
  let d = useDispatch();
  let alwaysShowDescription =
    preferences.todoPreferences?.alwaysShowDescription;
  let alwaysShowPriorityIcon =
    preferences.todoPreferences?.alwaysShowPriorityIcon;
  let editOnDoubleClick = preferences.todoPreferences?.editOnDoubleClick;
  let collapseDescription = preferences.todoPreferences?.collapseDescription;

  const showDescriptionChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setTodoShowDescription(e.target.checked));
  };

  const showPriorityIconChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setTodoShowPriorityIcon(e.target.checked));
  };

  const editOnDoubleClickChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setTodoEditOnDoubleClick(e.target.checked));
  };

  const collapseDescriptionChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    d(setTodoCollapseDescription(e.target.checked));
  };

  return (
    <Stack spacing="8">
      <FormControl>
        <Flex alignItems="center">
          <Checkbox
            isChecked={alwaysShowDescription}
            onChange={showDescriptionChanged}
          >
            {labels.alwaysShowDescription}
          </Checkbox>
        </Flex>
        <FormHelperText>
          {labels.alwaysShowDescriptionDescription}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox
          isChecked={alwaysShowPriorityIcon}
          onChange={showPriorityIconChanged}
        >
          {labels.alwaysShowPriorityIcon}
        </Checkbox>
        <FormHelperText>
          {labels.alwaysShowPriorityIconDescription}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox
          isChecked={editOnDoubleClick}
          onChange={editOnDoubleClickChanged}
        >
          {labels.editOnDoubleClick}
        </Checkbox>
        <FormHelperText>{labels.editOnDoubleClickDescription}</FormHelperText>
      </FormControl>
      <FormControl>
        <Checkbox
          isChecked={collapseDescription}
          onChange={collapseDescriptionChanged}
        >
          {labels.collapseDescription}
        </Checkbox>
        <FormHelperText>{labels.collapseDescriptionDescription}</FormHelperText>
      </FormControl>
    </Stack>
  );
}
