import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp(props) {
  const defaultTodos = [
    { id: uuidv4(), task: "Learn React", completed: true },
    { id: uuidv4(), task: "Build a full stack app", completed: false },
    { id: uuidv4(), task: "Find a job", completed: false },
  ];

  const [todos, setTodos] = useState(defaultTodos);

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

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addNewTodo={addNewTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
