import Folder from "utils/interfaces/common/Folder";

function createFolder(folders: Folder[], folder: Folder) {
  // Generating ID
  let maxId = [...folders].sort((a, b) => a.id! - b.id!)[
    folders.length - 1
  ];
  folder.id = folder.id ? folder.id : maxId ? maxId.id! + 1 : 1;
  // Add the new folder to the beginning of folders list.
  folders.push(folder);
  return folders;
}

export default createFolder;
