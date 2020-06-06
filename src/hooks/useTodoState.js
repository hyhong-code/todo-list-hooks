import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addNewTodo = (itemName) => {
    setTodos([...todos, { id: uuidv4(), task: itemName, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newTaskName) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: newTaskName };
        }
        return todo;
      })
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return {
    todos,
    addNewTodo,
    removeTodo,
    updateTodo,
    toggleTodo,
  };
};
