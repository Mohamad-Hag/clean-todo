import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import React, { useEffect, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormDescriptionDraft,
  setFormPriorityDraft,
  setFormTitleDraft,
} from "redux/features/draftSlice";
import {
  selectForm,
  setDescription,
  setPriority,
  setTitle,
} from "redux/features/formSlice";
import Priority from "utils/types/Priority";
import TodoCreatorPriorityButtons from "./TodoCreatorPriorityButtons";
import { selectPreferences } from "redux/features/preferencesSlice";

interface TodoCreatorBodyProps {}

export default function TodoCreatorBody({}: TodoCreatorBodyProps) {
  const { language } = useLanguage();
  const form = useSelector(selectForm);
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
    if (form.mode === "draft" && todoPreferences?.allowDrafts)
      d(setFormTitleDraft(value));
  };

  const descriptionChanged = (e: ContentEditableEvent) => {
    let value = e.target.value;
    d(setDescription(value));
    if (allowDrafts) d(setFormDescriptionDraft(value));
  };

  const prioritySelected = (priority: Priority) => {
    d(setPriority(priority));
    if (allowDrafts) d(setFormPriorityDraft(priority));
  };

  return (
    <Stack spacing="3">
      <FormControl>
        <FormLabel>{labels[language.code].title}</FormLabel>
        <Input ref={titleRef} value={form.title} onChange={titleChanged} />
      </FormControl>
      <FormControl>
        <FormLabel>{labels[language.code].description}</FormLabel>
        <ContentEditable
          className="todo-creator-description"
          html={form.description!}
          onChange={descriptionChanged}
        />
      </FormControl>
      <FormControl>
        <FormLabel>{labels[language.code].priority}</FormLabel>
        <TodoCreatorPriorityButtons
          priority={form.priority!}
          onSelect={prioritySelected}
        />
      </FormControl>
    </Stack>
  );
}
