import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import {
  selectForm,
  setDescription,
  setPriority,
  setTitle,
} from "../../redux/features/formSlice";
import Priority from "../../utils/types/Priority";
import TodoCreatorPriorityButtons from "./TodoCreatorPriorityButtons";

interface TodoCreatorBodyProps {}

export default function TodoCreatorBody({}: TodoCreatorBodyProps) {
  const form = useSelector(selectForm);
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

  const descriptionChanged = (e: ContentEditableEvent) => {
    d(setDescription(e.target.value));
  };

  const prioritySelected = (priority: Priority) => {
    d(setPriority(priority));
  };

  return (
    <Stack spacing="3">
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input ref={titleRef} value={form.title} onChange={titleChanged} />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <ContentEditable
          className="todo-creator-description"
          html={form.description!}
          onChange={descriptionChanged}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Priority</FormLabel>
        <TodoCreatorPriorityButtons
          priority={form.priority!}
          onSelect={prioritySelected}
        />
      </FormControl>
    </Stack>
  );
}
