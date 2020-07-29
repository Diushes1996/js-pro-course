import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <Input
        value={input}
        placeholder={"Enter todo title"}
        onChange={(e) => setInput(e.target.value)}
        color="primary"
      ></Input>
      <Button
        onClick={() => {
          if (input !== ''){
          addTodo({ text: input, done: false });
          setInput("");
          }
        }}
        color="primary"
        variant="contained"
      >
        Add
      </Button>
    </>
  );
};
