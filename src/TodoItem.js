import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditIcon from "@material-ui/icons/Edit";

function TodoItem({ taskName, completed }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText style={{ textDecoration: completed && "line-through" }}>
        {taskName}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <DeleteRoundedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
