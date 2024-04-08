import { useSelector } from "react-redux";
import { selectFolders } from "redux/features/folderSlice";
import isEmpty from "utils/isEmpty";
import FoldersEmptyList from "./FoldersEmptyList";
import FoldersFilledList from "./FoldersFilledList";

export default function FoldersList() {
  const folders = useSelector(selectFolders);

  return (
    <>
      {isEmpty(folders) ? (
        <FoldersEmptyList description="" />
      ) : (
        <FoldersFilledList folders={folders} />
      )}
    </>
  );
}
