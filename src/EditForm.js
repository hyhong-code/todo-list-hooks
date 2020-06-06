import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/TodosContext";

function EditForm({ id, finishEditing, prevItemName }) {
  const [itemName, setItemName, resetItemName] = useInputState(prevItemName);
  const { dispatch } = useContext(TodosContext);

  const handleUpdate = (evt) => {
    evt.preventDefault();
    dispatch({ type: "EDIT", id: id, newTaskName: itemName });
    resetItemName();
    finishEditing();
  };

  return (
    <form onSubmit={handleUpdate} style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        margin="normal"
        value={itemName}
        onChange={setItemName}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditForm;
