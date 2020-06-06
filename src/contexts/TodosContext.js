import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todosReducer";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [{ id: 1, task: "DemoItem", completed: false }];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
