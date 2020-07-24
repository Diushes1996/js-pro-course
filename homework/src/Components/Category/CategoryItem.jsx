import React, { useState } from "react";
// import { UnderCategoryList } from "../UnderCategory/UnderCategoryList";
import { AddUnderCategory } from "../UnderCategory/AddUnderCategory";

export const CategoryItem = ({
  text,
  deleteCategory,
  addUnderCategory,
  categories,
  deleteUnderCategory,
}) => {
  const [openForm, setOpenForm] = useState();
  const [addUnderComponent, setAddUnderComponent] = useState();
  return (
    <li>
      <input type="checkbox"></input>
      <button onClick={deleteCategory}>X</button>
      <button
        onClick={() =>
          setOpenForm(
            <AddUnderCategory
              categories={categories}
              deleteUnderCategory={deleteUnderCategory}
              setAddUnderComponent={setAddUnderComponent}
              addUnderCategory={addUnderCategory}
              setOpenForm={setOpenForm}
            />
          )
        }
      >
        +
      </button>
      <p>{text}</p>
      {openForm}
      {addUnderComponent}
      {/* <UnderCategoryList
        categories={categories}
        deleteUnderCategory={deleteUnderCategory}
      /> */}
    </li>
  );
};
