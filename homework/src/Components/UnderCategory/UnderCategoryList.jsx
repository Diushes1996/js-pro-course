import React from "react";
import { UnderCategoryItem } from "./UnderCategoryItem";

export const UnderCategoryList = ({ underCategories, deleteUnderCategory }) => {
  return (
    <ul>
      {underCategories.map(({ text, id }) => (
        <UnderCategoryItem
          key={id}
          text={text}
          deleteUnderCategory={() => deleteUnderCategory(id)}
        />
      ))}
    </ul>
  );
};
