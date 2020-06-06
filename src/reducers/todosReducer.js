import { v4 as uuidv4 } from "uuid";

// reducer takes current state and an action,
// returns a new state based on different actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuidv4(), task: action.itemName, completed: false },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "EDIT":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, task: action.newTaskName };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;

// {type: "ADD", task: "Walk the dog"}
// {type: "REMOVE", id: 123123}
// {type: "TOGGLE", id: 21321}
// {type: "EDIT", id: 123123, newTask: "Walk the cat"}
