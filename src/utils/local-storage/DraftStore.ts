import setFormTitleDraft from "redux/draftActions/setFormTitleDraft";
import { Draft } from "redux/features/draftSlice";
import setCategoryFormTitleDraft from "redux/draftActions/setCategoryFormTitleDraft";
import setCategoryFormIconDraft from "redux/draftActions/setCategoryFormIconDraft";
import setFormDescriptionDraft from "redux/draftActions/setFormDescriptionDraft";
import setFormPriorityDraft from "redux/draftActions/setFormPriorityDraft";
import Priority, { defaultPriority } from "utils/types/Priority";
import defaultCategoryIcon from "data/typescript/defaultCategoryIcon";
import initialDraft from "data/typescript/initialDraft";
import replaceDraft from "redux/draftActions/replaceDraft";
import clearForm from "redux/draftActions/clearForm";
import clearCategoryForm from "redux/draftActions/clearCategoryForm";

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

  public static setCategoryFormTitleDraft(draft: Draft, title: string) {
    DraftStore.set(setCategoryFormTitleDraft(draft, title));
  }

  public static setCategoryFormIconDraft(draft: Draft, icon: string) {
    DraftStore.set(setCategoryFormIconDraft(draft, icon));
  }

  public static setFormDescriptionDraft(draft: Draft, description: string) {
    DraftStore.set(setFormDescriptionDraft(draft, description));
  }

  public static setFormPriorityDraft(draft: Draft, priority: Priority) {
    DraftStore.set(setFormPriorityDraft(draft, priority));
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

  public static clearCategoryForm(draft: Draft) {
    let itemsAfterClear = clearCategoryForm(draft);
    DraftStore.set(itemsAfterClear);
    return itemsAfterClear;
  }
}

export default DraftStore;
