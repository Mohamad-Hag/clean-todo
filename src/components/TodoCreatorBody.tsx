import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectForm,
  setDescription,
  setTitle,
} from "../redux/features/formSlice";

interface TodoCreatorBodyProps {}

export default function TodoCreatorBody({}: TodoCreatorBodyProps) {
  const form = useSelector(selectForm);
  const dispatch = useDispatch();
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
    dispatch(setTitle(e.target.value));
  };

  const descriptionChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescription(e.target.value));
  };
  return (
    <Stack spacing="1">
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input ref={titleRef} value={form.title} onChange={titleChanged} />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          h={120}
          value={form.description}
          onChange={descriptionChanged}
        />
      </FormControl>
    </Stack>
  );
}
