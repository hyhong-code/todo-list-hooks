import React from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function TodoForm(props) {
  const [taskName, setTaskName, resetTaskName] = useInputState("");

  const { addNewTodo } = props;

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          addNewTodo(taskName);
          resetTaskName();
        }}
      >
        <TextField
          value={taskName}
          onChange={setTaskName}
          margin="normal"
          label="New todo item..."
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
