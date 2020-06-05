import React from "react";
import TodoItem from "./TodoItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <TodoItem
                {...todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
              />
              {i !== todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
