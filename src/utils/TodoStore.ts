import { EditData } from "../redux/features/todosSlice";
import activateAllTodos from "../redux/todoActions/activateAllTodos";
import clearTodos from "../redux/todoActions/clearTodos";
import createTodo from "../redux/todoActions/createTodo";
import editTodo from "../redux/todoActions/editTodo";
import finishAllTodos from "../redux/todoActions/finishAllTodos";
import finishSomeTodos from "../redux/todoActions/finishSomeTodos";
import removeFinishedTodos from "../redux/todoActions/removeFinishedTodos";
import removeSomeTodos from "../redux/todoActions/removeSomeTodos";
import removeTodo from "../redux/todoActions/removeTodo";
import selectAllTodos, {
  WithConditionCallback,
} from "../redux/todoActions/selectAllTodos";
import TodoProps, { TodoData } from "./interfaces/common/Todo";

class TodoStore {
  public static storage = localStorage;

  private static set(value: TodoProps[]) {
    this.storage.setItem("todos", JSON.stringify(value));
  }

  public static get(): TodoProps[] {
    if (!this.storage.getItem("todos")) this.set([]);
    return JSON.parse(this.storage.getItem("todos") as string);
  }

  public static create(todos: TodoProps[], todo: TodoData) {
    TodoStore.set(createTodo(todos, todo));
  }

  public static edit(todos: TodoProps[], editData: EditData) {
    let itemsAfterEdit = editTodo(todos, editData);
    TodoStore.set(editTodo(todos, editData));
    return itemsAfterEdit;
  }

  public static remove(todos: TodoProps[], id: number) {
    let itemsAfterRemove = removeTodo(todos, id);
    TodoStore.set(itemsAfterRemove);
    return itemsAfterRemove;
  }

  public static removeSome(todos: TodoProps[], identifiers: number[]) {
    let itemsAfterRemoveSome = removeSomeTodos(todos, identifiers);
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

  public static activateAll(todos: TodoProps[]) {
        let itemsAfterActivateAll = activateAllTodos(todos);
        TodoStore.set(itemsAfterActivateAll);
        return itemsAfterActivateAll;
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
