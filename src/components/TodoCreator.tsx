import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { createRef, useRef } from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { close, selectForm } from "../redux/features/formSlice";
import { create, edit } from "../redux/features/todosSlice";
import TodoCreatorBody from "./TodoCreatorBody";
import TodoCreatorFooter from "./TodoCreatorFooter";

interface TodoCreatorProps {}

export default function TodoCreator({}: TodoCreatorProps) {
  const form = useSelector(selectForm);
  const dispatch = useDispatch();
  const formTitle = form.mode === "create" ? "Create" : "Edit";

  const onClose = () => {
    dispatch(close());
  };

  const editTodo = () => {
    dispatch(
      edit({
        id: form.id!,
        editable: {
          title: form.title?.trim(),
          description: form.description?.trim(),
        },
      })
    );
  };
  const createTodo = () => {
    let nodeRef = createRef<HTMLDivElement>();
    dispatch(
      create({
        createdAt: new Date().toLocaleString(),
        title: form.title?.trim(),
        description: form.description?.trim(),
        nodeRef: nodeRef,
      })
    );
  };

  const create_ = () => {
    const isTitleDefined = form.title?.trim() !== "" && form.title;
    if (!isTitleDefined) return;
    if (form.mode === "create") createTodo();
    else editTodo();
    onClose();
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();
    create_();
  };

  return (
    <Modal
      isOpen={!!form.isOpen}
      onClose={onClose}
      size="lg"
      closeOnOverlayClick={false}      
    >
      <ModalOverlay />
      <ModalContent m={2}>
        <ModalHeader display="flex" alignItems="center" gap="2">
          <BiListPlus />
          {formTitle} Todo
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={submitted}>
            <Stack spacing="4">
              <TodoCreatorBody />
              <TodoCreatorFooter title={formTitle} />
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
