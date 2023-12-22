import { Stack } from "@chakra-ui/react";
import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectForm } from "redux/features/formSlice";
import { create, edit } from "redux/features/todosSlice";
import TodoCreatorBody from "./TodoCreatorBody";
import TodoCreatorFooter from "./TodoCreatorFooter";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface TodoCreatorFormProps {
  closeCallback: () => void;
}

export default function TodoCreatorForm({
  closeCallback,
}: TodoCreatorFormProps) {
  const { language } = useLanguage();
  const form = useSelector(selectForm);
  const formTitle =
    form.mode === "create" || form.mode === "draft"
      ? labels[language.code].create
      : labels[language.code].edit;
  const description = form.description?.replace(/\n\r?/g, "<br/>").trim();
  const d = useDispatch();

  const editTodo = () => {
    d(
      edit({
        id: form.id!,
        editable: {
          title: form.title?.trim(),
          description: description,
          priority: form.priority,
        },
      })
    );
  };

  const createTodo = () => {
    let nodeRef = createRef<HTMLDivElement>();
    d(
      create({
        createdAt: new Date().toLocaleString(),
        title: form.title?.trim(),
        description: description,
        priority: form.priority,
        nodeRef: nodeRef,
      })
    );
  };

  const create_ = () => {
    const isTitleDefined = form.title?.trim() !== "" && form.title;
    if (!isTitleDefined) return;
    if (form.mode === "create" || form.mode === "draft") createTodo();
    else editTodo();
    closeCallback();
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();
    create_();
  };
  return (
    <form onSubmit={submitted}>
      <Stack spacing="4">
        <TodoCreatorBody />
        <TodoCreatorFooter title={formTitle} />
      </Stack>
    </form>
  );
}
