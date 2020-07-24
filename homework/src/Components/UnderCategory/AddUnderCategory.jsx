import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { UnderCategoryList } from "./UnderCategoryList";

export const AddUnderCategory = ({
  addUnderCategory,
  setOpenForm,
  setAddUnderComponent,
  categories,
  deleteUnderCategory,
}) => {
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
        onClick={() => {
          setAddUnderComponent(
            <UnderCategoryList
              categories={categories}
              deleteUnderCategory={deleteUnderCategory}
            />
          );
          addUnderCategory({ text: input });
          setInput("");
          setOpenForm();
        }}
        color="primary"
        variant="contained"
      >
        Add
      </Button>
    </>
  );
};
