import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
function EditForm({ updateTodo, id, finishEditing, prevItemName }) {
  const [itemName, setItemName, resetItemName] = useInputState(prevItemName);

  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateTodo(id, itemName);
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
