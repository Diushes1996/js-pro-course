import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export const AddUnderCategory = ({ addUnderCategory }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <Input
        value={input}
        placeholder={"Enter undercategory title"}
        onChange={(e) => setInput(e.target.value)}
        color="primary"
      ></Input>
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
