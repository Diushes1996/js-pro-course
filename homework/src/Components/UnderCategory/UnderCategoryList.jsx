import React from "react";
import { UnderCategoryItem } from "./UnderCategoryItem";

export const UnderCategoryList = ({ categories, underCategories, deleteUnderCategory }) => {
  return (
    console.log(underCategories),
    <ul>
      {categories.map(({ underCategoryText, underCategoryId }) => (
        <UnderCategoryItem
        key={underCategoryId}
        underCategoryText={underCategoryText}
        deleteUnderCategory={() => deleteUnderCategory(underCategoryId)}
        />
        ))}
    </ul>
  );
};
