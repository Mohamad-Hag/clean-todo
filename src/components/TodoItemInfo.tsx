import { Stack } from "@chakra-ui/react";

interface TodoItemInfo {
  title?: string;
  description?: string;
  date?: string;
}
export default function TodoItemInfo({
  title,
  description,
  date,
}: TodoItemInfo) {
  const isDescriptionDefined = description && description !== "";

  return (
    <Stack spacing="1">
      <Stack spacing="-0.5">
        <h1 className="text-xl font-semibold">{title}</h1>
        {isDescriptionDefined && <p>{description}</p>}
      </Stack>
      <label className="text-xs text-gray-400">{date}</label>
    </Stack>
  );
}
