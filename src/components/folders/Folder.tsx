import { Box } from "@chakra-ui/react";
import { default as IFolder } from "utils/interfaces/common/Folder";
import FolderButton, { FolderButtonProps } from "./FolderButton";
import FolderControls from "./FolderControls";

interface FolderProps extends FolderButtonProps {
  id: number;
}

export default function Folder({
  index,
  icon,
  title,
  onSelect,
  to,
  isActive = false,
  id,
}: FolderProps) {
  const thisFolder: IFolder = {
    id: id,
    icon: icon,
    title: title,
  };

  return (
    <Box className="flex items-center gap-1" maxW="228px">
      <FolderButton
        id={id}
        to={to}
        isActive={isActive}
        icon={icon}
        title={title}
        onSelect={onSelect}
        index={index}
      />
      <FolderControls folder={thisFolder} />
    </Box>
  );
}
