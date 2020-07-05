import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export const AddUnderCategory = ({ addUnderCategory }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <Button
        onClick={() => addUnderCategory({ text: input })}
        color="primary"
        variant="contained"
      >
        Add UnderCategory
      </Button>
    </>
  );
};
