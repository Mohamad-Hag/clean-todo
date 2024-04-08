import folderIcons from "data/typescript/folderIcons";

function getFolderIconByTitle(title: string): React.ReactElement {
  return folderIcons.find((folderIcon) => folderIcon.title === title)
    ?.icon!;
}

export default getFolderIconByTitle;
