import { Todo } from "../entities/todo";

//in memory data
let todos: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },
];

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// create new todo mock data

export const postTodo = async (newTodo: Todo) => {
  await simulateDelay(1000);
  todos = [...todos, newTodo];
  return newTodo;
};

// get all todo mock data

export const getTodos = async () => {
  await simulateDelay(1000);
  return todos;
};

export const deleteTodo = async (id: number) => {
  await simulateDelay(1000);
  todos = todos.filter((todo) => todo.id !== id);
};
