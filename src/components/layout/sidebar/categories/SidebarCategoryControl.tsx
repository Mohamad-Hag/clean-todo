import { IconButton } from "@chakra-ui/react";
import { BiPencil, BiTrash } from "react-icons/bi";

interface EditCategoryButtonProps {
  type: "edit" | "remove";
  onClick: () => void;
}

export default function SidebarCategoryControl({
  type,
  onClick,
}: EditCategoryButtonProps) {
  let icon =
    type === "edit" ? <BiPencil fill="white" /> : <BiTrash fill="white" />;

  return (
    <IconButton
      icon={icon}
      aria-label={`${type} category`}
      variant="ghost"
      size="sm"
      onClick={onClick}
      _hover={{}}
    />
  );
}
