import React,{useContext} from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import {DispatchContext} from "./context/todosContext"

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({type: "EDIT",id: id ,newTask: value})
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullwidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
