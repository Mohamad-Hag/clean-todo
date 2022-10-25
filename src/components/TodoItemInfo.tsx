import { Stack } from "@chakra-ui/react";

interface TodoItemInfo {
  title?: string;
  description?: string;
  date?: string;
  onDoubleClick?: () => void;
}
export default function TodoItemInfo({
  title,
  description,
  date,
  onDoubleClick,
}: TodoItemInfo) {
  const isDescriptionDefined = description && description !== "";

  return (
    <Stack
      spacing="1"
      onDoubleClick={onDoubleClick}
      border="1px solid transparent"
      _hover={{
        bg: "#22222205",
        border: "1px solid #22222210",
      }}
      _active={{
        bg: "#22222210",
      }}
      p="2"
      borderRadius="md"
    >
      <Stack spacing="-0.5">
        <h1 className="text-xl font-semibold toolbar-item-info-title">
          {title}
        </h1>
        {isDescriptionDefined && (
          <p className="toolbar-item-info-description">{description}</p>
        )}
      </Stack>
      <label className="text-xs text-gray-400">{date}</label>
    </Stack>
  );
}
