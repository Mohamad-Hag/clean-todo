import { Modal, ModalOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFolderSelector } from "redux/features/folderSelectorSlice";
import { selectFolders } from "redux/features/folderSlice";
import FolderSelectorContent from "./FolderSelectorContent";
import { useDispatch } from "react-redux";
import { close } from "redux/features/folderSelectorSlice";

export default function FolderSelector() {
  const folders = useSelector(selectFolders);
  const folderSelector = useSelector(selectFolderSelector);
  const d = useDispatch();

  const initialize = () =>
    Array(folders.length)
      .fill(false)
      .map(
        (_, index) => folders[index].id === folderSelector.ids?.folderId
      );

  useEffect(() => {
    setIsActiveArray(initialize());
  }, [folderSelector.ids]);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

  const close_ = () => {
    d(close());
    setIsActiveArray(isActiveArray.fill(false));
  };

  const bodyChanged = (isActiveArr: boolean[]) => {
    setIsActiveArray(isActiveArr);
  };

  return (
    <Modal
      isOpen={folderSelector.isOpen!}
      onClose={close_}
      size="sm"
      closeOnEsc
    >
      <ModalOverlay />
      <FolderSelectorContent
        onBodyChanged={bodyChanged}
        onClose={close_}
        isActiveArray={isActiveArray}
      />
    </Modal>
  );
}
