import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export const AddCategory = ({ addCategory }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <Input
        value={input}
        placeholder={"Enter category title"}
        onChange={(e) => setInput(e.target.value)}
        color="primary"
      ></Input>
      <Button
        onClick={() => addCategory({ text: input })}
        color="primary"
        variant="contained"
      >
        Add
      </Button>
    </>
  );
};
