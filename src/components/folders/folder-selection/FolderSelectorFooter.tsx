import { Button, ModalFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  close,
  select,
  selectFolderSelector,
} from "redux/features/folderSelectorSlice";
import { edit } from "redux/features/todosSlice";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface FolderSelectorFooterProps {
  isButtonsDisabled: boolean;
  onClose: () => void;
}

export default function FolderSelectorFooter({
  isButtonsDisabled,
  onClose,
}: FolderSelectorFooterProps) {
  const { language } = useLanguage();
  const folderSelector = useSelector(selectFolderSelector);
  const d = useDispatch();

  const select_ = (isRemoveFolder: boolean) => {
    d(select());
    let newFolderId = !isRemoveFolder
      ? folderSelector.ids?.folderId
      : null;
    d(
      edit({
        id: folderSelector.ids?.itemId!,
        editable: {
          folderId: newFolderId,
        },
      })
    );
  };

  const close_ = () => {
    if (onClose) onClose();
    d(close());
  };

  return (
    <ModalFooter className="flex items-center gap-1">
      <Button onClick={close_}>{labels[language.code].cancel}</Button>
      <Button
        colorScheme="red"
        variant="solid"
        isDisabled={isButtonsDisabled}
        onClick={() => select_(true)}
      >
        {labels[language.code].remove}
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        isDisabled={isButtonsDisabled}
        onClick={() => select_(false)}
      >
        {labels[language.code].select}
      </Button>
    </ModalFooter>
  );
}
