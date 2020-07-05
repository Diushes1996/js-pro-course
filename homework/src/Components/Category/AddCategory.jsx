import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export const AddCategory = ({ addCategory }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        value={input}
        placeholder={"Enter category title"}
        onChange={(e) => setInput(e.target.value)}
      ></input>
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
