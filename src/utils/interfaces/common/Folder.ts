export default interface Folder extends FolderEditable {
  id?: number;
}

export interface FolderEditable {
  title?: string;
  icon?: string;
}
