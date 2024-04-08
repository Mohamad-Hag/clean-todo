import { Button, ModalBody } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  change,
  selectFolderSelector,
} from "redux/features/folderSelectorSlice";
import { selectFolders } from "redux/features/folderSlice";
import getFolderIconByTitle from "utils/getFolderIconByTitle";
import FoldersEmptyList from "../FoldersEmptyList";

interface FolderSelectorBodyProps {
  isActiveArray: boolean[];
  onChange: (isActiveArray: boolean[]) => void;
}

export default function FolderSelectorBody({
  isActiveArray,
  onChange,
}: FolderSelectorBodyProps) {
  const folders = useSelector(selectFolders);
  const folderSelector = useSelector(selectFolderSelector);
  const d = useDispatch();

  const change_ = (index: number, folderId: number) => {
    let activeArray = [...isActiveArray];
    let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
    activeArray[activeBackgroundIndex] = false;
    activeArray[index] = true;
    d(
      change({
        folderId: folderId,
        itemId: folderSelector.ids?.itemId!,
      })
    );

    if (onChange) onChange(activeArray);
  };

  return (
    <ModalBody>
      {folders.length === 0 ? (
        <FoldersEmptyList iconColor="#3b82f6" isSidebarFolders={false} />
      ) : (
        folders.map((folder, i) => (
          <Button
            key={folder.id}
            w="100%"
            justifyContent="flex-start"
            gap="1"
            variant="ghost"
            isActive={isActiveArray[i]}
            onClick={() => change_(i, folder.id!)}
          >
            <p>{getFolderIconByTitle(folder.icon!)}</p>
            <p>{folder.title}</p>
          </Button>
        ))
      )}
    </ModalBody>
  );
}
