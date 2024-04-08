import { IconButton } from "@chakra-ui/react";
import { BiPencil, BiTrash } from "react-icons/bi";

interface EditFolderButtonProps {
  type: "edit" | "remove";
  onClick: () => void;
}

export default function FolderControl({
  type,
  onClick,
}: EditFolderButtonProps) {
  let icon =
    type === "edit" ? <BiPencil fill="white" /> : <BiTrash fill="white" />;

  return (
    <IconButton
      icon={icon}
      aria-label={`${type} folder`}
      variant="ghost"
      size="sm"
      onClick={onClick}
      _hover={{}}
    />
  );
}
