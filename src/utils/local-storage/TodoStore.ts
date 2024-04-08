import {
  EditData,
  ItemIds_FolderId,
  RemoveItemPayload,
} from "redux/features/todosSlice";
import activateAllTodos from "redux/todoActions/activateAllTodos";
import addFolderSomeTodos from "redux/todoActions/addFolderSomeTodos";
import clearTodos from "redux/todoActions/clearTodos";
import collapseDescription from "redux/todoActions/collapseDescription";
import createTodo from "redux/todoActions/createTodo";
import editTodo from "redux/todoActions/editTodo";
import expandDescription from "redux/todoActions/expandDescription";
import finishAllTodos from "redux/todoActions/finishAllTodos";
import finishSomeTodos from "redux/todoActions/finishSomeTodos";
import removeFinishedTodos from "redux/todoActions/removeFinishedTodos";
import removeSomeTodos from "redux/todoActions/removeSomeTodos";
import removeTodo from "redux/todoActions/removeTodo";
import replaceTodos from "redux/todoActions/replaceTodos";
import selectAllTodos, {
  WithConditionCallback,
} from "redux/todoActions/selectAllTodos";
import TodoProps, { TodoData } from "../interfaces/common/Todo";
import restoreSomeTodos from "redux/todoActions/restoreSomeTodos";
import activateSomeTodos from "redux/todoActions/activateSomeTodos";

class TodoStore {
  public static storage = localStorage;
  private static nameInStorage = "todos";

  private static set(value: TodoProps[]) {
    this.storage.setItem(this.nameInStorage, JSON.stringify(value));
  }

  public static get(): TodoProps[] {
    if (!this.storage.getItem(this.nameInStorage)) this.set([]);
    return JSON.parse(this.storage.getItem(this.nameInStorage) as string);
  }

  public static create(todos: TodoProps[], todo: TodoData) {
    TodoStore.set(createTodo(todos, todo));
  }

  public static replace(todos: TodoProps[], newTodos: TodoProps[]) {
    let itemsAfterReplace = replaceTodos(todos, newTodos);
    TodoStore.set(itemsAfterReplace);
    return itemsAfterReplace;
  }

  public static edit(todos: TodoProps[], editData: EditData) {
    let itemsAfterEdit = editTodo(todos, editData);
    TodoStore.set(editTodo(todos, editData));
    return itemsAfterEdit;
  }

  public static expandDescription(todos: TodoProps[], id: number) {
    let itemsAfterExpand = expandDescription(todos, id);
    TodoStore.set(itemsAfterExpand);
    return itemsAfterExpand;
  }

  public static collapseDescription(todos: TodoProps[], id: number) {
    let itemsAfterCollapse = collapseDescription(todos, id);
    TodoStore.set(itemsAfterCollapse);
    return itemsAfterCollapse;
  }

  public static remove(todos: TodoProps[], removeItem: RemoveItemPayload) {
    let itemsAfterRemove = removeTodo(todos, removeItem);
    TodoStore.set(itemsAfterRemove);
    return itemsAfterRemove;
  }

  public static removeSome(
    todos: TodoProps[],
    removeItems: RemoveItemPayload[]
  ) {
    let itemsAfterRemoveSome = removeSomeTodos(todos, removeItems);
    TodoStore.set(itemsAfterRemoveSome);
    return itemsAfterRemoveSome;
  }

  public static removeFinished(todos: TodoProps[]) {
    let itemsAfterRemoveFinished = removeFinishedTodos(todos);
    TodoStore.set(itemsAfterRemoveFinished);
    return itemsAfterRemoveFinished;
  }

  public static clear(todos: TodoProps[]) {
    let itemsAfterClear = clearTodos(todos);
    TodoStore.set(itemsAfterClear);
    return itemsAfterClear;
  }

  public static finishAll(todos: TodoProps[]) {
    let itemsAfterFinishAll = finishAllTodos(todos);
    TodoStore.set(itemsAfterFinishAll);
    return itemsAfterFinishAll;
  }

  public static finishSome(todos: TodoProps[], identifiers: number[]) {
    let itemsAfterFinishSome = finishSomeTodos(todos, identifiers);
    TodoStore.set(itemsAfterFinishSome);
    return itemsAfterFinishSome;
  }

  public static activateSome(todos: TodoProps[], identifiers: number[]) {
    let itemsAfterActivateSome = activateSomeTodos(todos, identifiers);
    TodoStore.set(itemsAfterActivateSome);
    return itemsAfterActivateSome;
  }

  public static restoreSome(todos: TodoProps[], identifiers: number[]) {
    let itemsAfterRestoreSome = restoreSomeTodos(todos, identifiers);
    TodoStore.set(itemsAfterRestoreSome);
    return itemsAfterRestoreSome;
  }

  public static activateAll(todos: TodoProps[]) {
    let itemsAfterActivateAll = activateAllTodos(todos);
    TodoStore.set(itemsAfterActivateAll);
    return itemsAfterActivateAll;
  }

  public static addFolderSome(
    todos: TodoProps[],
    itemIds_folderId: ItemIds_FolderId
  ) {
    let itemsAfterAddFolderSome = addFolderSomeTodos(
      todos,
      itemIds_folderId
    );
    TodoStore.set(itemsAfterAddFolderSome);
    return itemsAfterAddFolderSome;
  }

  public static selectAll(
    todos: TodoProps[],
    condition: WithConditionCallback
  ) {
    let itemsAfterSelectAll = selectAllTodos(todos, condition);
    TodoStore.set(itemsAfterSelectAll);
    return itemsAfterSelectAll;
  }
}

export default TodoStore;
