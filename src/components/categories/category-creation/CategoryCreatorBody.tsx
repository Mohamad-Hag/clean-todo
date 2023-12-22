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
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import {
  setCategoryFormIconDraft,
  setCategoryFormTitleDraft,
} from "redux/features/draftSlice";
import { selectPreferences } from "redux/features/preferencesSlice";

interface TodoCreatorBodyProps {}

export default function TodoCreatorBody({}: TodoCreatorBodyProps) {
  const { language } = useLanguage();
  const form = useSelector(selectCategoryForm);
  const { todoPreferences } = useSelector(selectPreferences);
  const allowDrafts = form.mode === "draft" && todoPreferences?.allowDrafts;
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
    let value = e.target.value;
    d(setTitle(value));
    if (allowDrafts) d(setCategoryFormTitleDraft(value));
  };

  const iconChanged = (newIcon: string) => {
    d(setIcon(newIcon));
    if (allowDrafts) d(setCategoryFormIconDraft(newIcon));
  };

  return (
    <Stack spacing="3">
      <FormControl>
        <FormLabel>{labels[language.code].title}</FormLabel>
        <Input
          ref={titleRef}
          value={form.title}
          onChange={titleChanged}
          maxLength={10}
        />
        <FormHelperText>
          {labels[language.code].maxAllowedChars10}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>{labels[language.code].icon}</FormLabel>
        <CategoryCreatorIcons onSelect={iconChanged} icon={form.icon!} />
      </FormControl>
    </Stack>
  );
}
