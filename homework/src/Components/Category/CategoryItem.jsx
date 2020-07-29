import React, { useState } from "react";
import { AddUnderCategory } from "../UnderCategory/AddUnderCategory";

export const CategoryItem = ({
  categoryText,
  deleteCategory,
  addUnderCategory,
  categories,
  underCategories,
  deleteUnderCategory,
}) => {
  const [openForm, setOpenForm] = useState();
  const [addUnderComponent, setAddUnderComponent] = useState();
  return (
    <div className="category">
    <li className="category-text">
      <p>{categoryText}</p>
    </li>
      <button className="category-close" onClick={deleteCategory}>X</button>
      <button
      className="category-add"
        onClick={() =>
          setOpenForm(
            <AddUnderCategory
            categories={categories}
            underCategories={underCategories}
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
      {openForm}
      {addUnderComponent}
          </div>
  );
};
