import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { UnderCategoryList } from "./UnderCategoryList";

export const AddUnderCategory = ({
  addUnderCategory,
  setOpenForm,
  setAddUnderComponent,
  categories,
  underCategories,
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
          if(input !== '') {
          setAddUnderComponent(
            <UnderCategoryList
              categories={categories}
              underCategories={underCategories}
              deleteUnderCategory={deleteUnderCategory}
            />
          );
          addUnderCategory({ underCategoryText: input });
          setInput("");
          setOpenForm();
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
