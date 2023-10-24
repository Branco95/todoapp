import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

// This function will return all the todos from the server
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

// This function will create a new todo in the server
export const addTodo = async (todo: ITask): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};
