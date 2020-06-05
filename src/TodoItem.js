import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditForm from "./EditForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditIcon from "@material-ui/icons/Edit";

function TodoItem({
  taskName,
  completed,
  id,
  removeTodo,
  toggleTodo,
  updateTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          prevItemName={taskName}
          id={id}
          finishEditing={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {taskName}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteRoundedIcon />
            </IconButton>
          </ListItemSecondaryAction>{" "}
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
