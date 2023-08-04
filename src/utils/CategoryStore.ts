import createCategory from "redux/categoryActions/createCategory";
import editCategory from "redux/categoryActions/editCategory";
import removeCategory from "redux/categoryActions/removeCategory";
import { EditData } from "redux/features/categorySlice";
import Category from "./interfaces/common/Category";

class CategoryStore {
  public static storage = localStorage;

  private static set(value: Category[]) {
    this.storage.setItem("categories", JSON.stringify(value));
  }

  public static get(): Category[] {
    if (!this.storage.getItem("categories")) this.set([]);
    return JSON.parse(this.storage.getItem("categories") as string);
  }

  public static create(categories: Category[], category: Category) {
    CategoryStore.set(createCategory(categories, category));
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
