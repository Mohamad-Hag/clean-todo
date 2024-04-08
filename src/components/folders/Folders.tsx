import CreateFolderButton from "./CreateFolderButton";
import FoldersList from "./FoldersList";
import FoldersWrapper from "./FoldersWrapper";

export default function Folders() {
  return (
    <FoldersWrapper>
      <CreateFolderButton />
      <FoldersList />
    </FoldersWrapper>
  );
}
