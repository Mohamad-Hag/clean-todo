import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryForm,
  setIcon,
  setTitle,
} from "redux/features/categoryFormSlice";
import CategoryCreatorIcons from "./CategoryCreatorIcons";
import labels from "data/json/ui-labels.json";

interface TodoCreatorBodyProps {}

export default function TodoCreatorBody({}: TodoCreatorBodyProps) {
  const form = useSelector(selectCategoryForm);
  const d = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null!);

  const focus = () => {
    let titleCurrent = titleRef.current;
    let isTitleDefined = form.title && form.title !== "";
    let isFormOpen = form.isOpen === true;
    let canSelect = isTitleDefined && isFormOpen;
    titleCurrent.focus();
    if (canSelect) titleCurrent.setSelectionRange(0, form.title!.length);
  };

  useEffect(() => {
    focus();
  }, [form.isOpen]);

  const titleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(setTitle(e.target.value));
  };

  const iconChanged = (newIcon: string) => {
    d(setIcon(newIcon));
  };

  return (
    <Stack spacing="3">
      <FormControl>
        <FormLabel>{labels.title}</FormLabel>
        <Input
          ref={titleRef}
          value={form.title}
          onChange={titleChanged}
          maxLength={20}
        />
        <FormHelperText>{labels.maxAllowedChars10}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>{labels.icon}</FormLabel>
        <CategoryCreatorIcons onSelect={iconChanged} icon={form.icon!} />
      </FormControl>
    </Stack>
  );
}
