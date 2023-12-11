import createCategory from "redux/categoryActions/createCategory";
import editCategory from "redux/categoryActions/editCategory";
import removeCategory from "redux/categoryActions/removeCategory";
import replaceCategory from "redux/categoryActions/replaceCategory";
import { EditData } from "redux/features/categorySlice";
import Category from "../interfaces/common/Category";

class CategoryStore {
  public static storage = localStorage;
  private static nameInStorage = "categories";

  private static set(value: Category[]) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): Category[] {
    if (!this.storage.getItem(this.nameInStorage)) this.set([]);
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static create(categories: Category[], category: Category) {
    CategoryStore.set(createCategory(categories, category));
  }

  public static replace(categories: Category[], newCategories: Category[]) {
    let itemsAfterReplace = replaceCategory(categories, newCategories);
    CategoryStore.set(itemsAfterReplace);
    return itemsAfterReplace;
  }

  public static edit(categories: Category[], editData: EditData) {
    let itemsAfterEdit = editCategory(categories, editData);
    CategoryStore.set(editCategory(categories, editData));
    return itemsAfterEdit;
  }

  public static remove(categories: Category[], id: number) {
    let itemsAfterRemove = removeCategory(categories, id);
    CategoryStore.set(itemsAfterRemove);
    return itemsAfterRemove;
  }
}

export default CategoryStore;
