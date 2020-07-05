import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <Button
        onClick={() => addTodo({ text: input, done: false })}
        color="primary"
        variant="contained"
      >
        Add Todo
      </Button>
    </>
  );
};
