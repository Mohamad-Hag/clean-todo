import TodoProps, { TodoData } from "../../utils/interfaces/common/Todo";

function createTodo(todos: TodoProps[], todo: TodoData) {
  let newTodo = todoDataToProps(todo);
  // Generating ID
  let maxId = [...todos].sort((a, b) => a.id! - b.id!)[todos.length - 1];
  newTodo.id = newTodo.id ? newTodo.id : maxId ? maxId.id! + 1 : 1;
  // Add the new todo to the beginning of todos list.
  todos.unshift(newTodo);
  return todos;
}

const todoDataToProps = (todo: TodoData): TodoProps => ({
  id: todo.id!,
  date: todo.createdAt,
  isSelected: false,
  title: todo.title,
  description: todo.description,
  priority: todo.priority,
});

export default createTodo;
