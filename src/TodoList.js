import React from "react";
import TodoItem from "./TodoItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem
              id={todo.id}
              taskName={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
