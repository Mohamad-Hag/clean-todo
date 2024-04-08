import Folder from "utils/interfaces/common/Folder";

function removeFolder(folders: Folder[], id: number) {
  folders = folders.filter((folder) => folder.id !== id);
  return folders;
}

export default removeFolder;
