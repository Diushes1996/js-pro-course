import React from "react";
import { UnderCategoryList } from "../UnderCategory/UnderCategoryList";

export const CategoryItem = ({
  text,
  deleteCategory,
  categories,
  deleteUnderCategory,
}) => {
  return (
    <li>
      <input type="checkbox"></input>
      <button onClick={deleteCategory}>X</button>
      <button>+</button>
      <p>{text}</p>
      <UnderCategoryList
        categories={categories}
        deleteUnderCategory={deleteUnderCategory}
      />
    </li>
  );
};
