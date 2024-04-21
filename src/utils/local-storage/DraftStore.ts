import setFormTitleDraft from "redux/draftActions/setFormTitleDraft";
import { Draft } from "redux/features/draftSlice";
import setFolderFormTitleDraft from "redux/draftActions/setFolderFormTitleDraft";
import setFolderFormIconDraft from "redux/draftActions/setFolderFormIconDraft";
import setFormDescriptionDraft from "redux/draftActions/setFormDescriptionDraft";
import Priority from "utils/types/Priority";
import initialDraft from "data/typescript/initialDraft";
import replaceDraft from "redux/draftActions/replaceDraft";
import clearForm from "redux/draftActions/clearForm";
import clearFolderForm from "redux/draftActions/clearFolderForm";
import setFormPriorityDraft from "redux/draftActions/setFormPriorityDraft";
import setFormDueDateDraft from "redux/draftActions/setFormDueDateDraft";
import setFormFolderIdDraft from "redux/draftActions/setFormFolderIdDraft";

class DraftStore {
  public static storage = localStorage;
  private static nameInStorage = "draft";

  private static set(value: Draft) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): Draft {
    if (!this.storage.getItem(this.nameInStorage)) this.set(initialDraft);
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static setFormTitleDraft(draft: Draft, title: string) {
    DraftStore.set(setFormTitleDraft(draft, title));
  }

  public static setFolderFormTitleDraft(draft: Draft, title: string) {
    DraftStore.set(setFolderFormTitleDraft(draft, title));
  }

  public static setFolderFormIconDraft(draft: Draft, icon: string) {
    DraftStore.set(setFolderFormIconDraft(draft, icon));
  }

  public static setFormDescriptionDraft(draft: Draft, description: string) {
    DraftStore.set(setFormDescriptionDraft(draft, description));
  }

  public static setFormDueDateDraft(draft: Draft, dueDate: string) {
    DraftStore.set(setFormDueDateDraft(draft, dueDate));
  }

  public static setFormPriorityDraft(draft: Draft, priority: Priority) {
    DraftStore.set(setFormPriorityDraft(draft, priority));
  }

  public static setFormFolderIdDraft(
    draft: Draft,
    folderId: number | undefined
  ) {
    DraftStore.set(setFormFolderIdDraft(draft, folderId));
  }

  public static replace(draft: Draft, newDraft: Draft) {
    let itemsAfterReplace = replaceDraft(draft, newDraft);
    DraftStore.set(itemsAfterReplace);
    return itemsAfterReplace;
  }

  public static clearForm(draft: Draft) {
    let itemsAfterClear = clearForm(draft);
    DraftStore.set(itemsAfterClear);
    return itemsAfterClear;
  }

  public static clearFolderForm(draft: Draft) {
    let itemsAfterClear = clearFolderForm(draft);
    DraftStore.set(itemsAfterClear);
    return itemsAfterClear;
  }
}

export default DraftStore;
