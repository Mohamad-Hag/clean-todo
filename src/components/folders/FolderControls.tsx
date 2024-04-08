import { Flex } from "@chakra-ui/react";
import EditFolderContainer from "./EditFolderContainer";
import RemoveFolderContainer from "./RemoveFolderContainer";
import Folder from "utils/interfaces/common/Folder";

interface FolderControlsProps {
  folder: Folder;
}

export default function FolderControls({
  folder,
}: FolderControlsProps) {
  return (
    <Flex align="center" gap="1">
      <EditFolderContainer folder={folder} />
      <RemoveFolderContainer folder={folder} />
    </Flex>
  );
}
