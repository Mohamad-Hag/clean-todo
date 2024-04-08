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
  selectFolderForm,
  setIcon,
  setTitle,
} from "redux/features/folderFormSlice";
import FolderCreatorIcons from "./FolderCreatorIcons";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import {
  setFolderFormIconDraft,
  setFolderFormTitleDraft,
} from "redux/features/draftSlice";
import { selectPreferences } from "redux/features/preferencesSlice";

export default function TodoCreatorBody() {
  const { language } = useLanguage();
  const form = useSelector(selectFolderForm);
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
    if (allowDrafts) d(setFolderFormTitleDraft(value));
  };

  const iconChanged = (newIcon: string) => {
    d(setIcon(newIcon));
    if (allowDrafts) d(setFolderFormIconDraft(newIcon));
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
        <FolderCreatorIcons onSelect={iconChanged} icon={form.icon!} />
      </FormControl>
    </Stack>
  );
}
