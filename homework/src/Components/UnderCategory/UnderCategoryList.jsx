import React from "react";
import { UnderCategoryItem } from "./UnderCategoryItem";

export const UnderCategoryList = ({ categories, deleteUnderCategory }) => {
  return (
    <ul>
      {categories.map(({ text, id }) => (
        <UnderCategoryItem
          key={id}
          text={text}
          deleteUnderCategory={() => deleteUnderCategory(id)}
        />
      ))}
    </ul>
  );
};
