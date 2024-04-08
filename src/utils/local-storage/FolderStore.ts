import createFolder from "redux/folderActions/createFolder";
import editFolder from "redux/folderActions/editFolder";
import removeFolder from "redux/folderActions/removeFolder";
import replaceFolder from "redux/folderActions/replaceFolder";
import { EditData } from "redux/features/folderSlice";
import Folder from "../interfaces/common/Folder";

class FolderStore {
  public static storage = localStorage;
  private static nameInStorage = "folders";

  private static set(value: Folder[]) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): Folder[] {
    if (!this.storage.getItem(this.nameInStorage)) this.set([]);
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static create(folders: Folder[], folder: Folder) {
    FolderStore.set(createFolder(folders, folder));
  }

  public static replace(folders: Folder[], newFolders: Folder[]) {
    let itemsAfterReplace = replaceFolder(folders, newFolders);
    FolderStore.set(itemsAfterReplace);
    return itemsAfterReplace;
  }

  public static edit(folders: Folder[], editData: EditData) {
    let itemsAfterEdit = editFolder(folders, editData);
    FolderStore.set(editFolder(folders, editData));
    return itemsAfterEdit;
  }

  public static remove(folders: Folder[], id: number) {
    let itemsAfterRemove = removeFolder(folders, id);
    FolderStore.set(itemsAfterRemove);
    return itemsAfterRemove;
  }
}

export default FolderStore;
