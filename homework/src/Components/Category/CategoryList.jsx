import React from "react";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({
  categories,
  underCategories,
  deleteCategory,
  addUnderCategory,
  deleteUnderCategory,
}) => {
  return (
    <ul className="category-list">
      {categories.map(({ categoryText, categoryId }) => (
        <CategoryItem
          key={categoryId}
          categoryText={categoryText}
          deleteCategory={() => deleteCategory(categoryId)}
          categories={categories}
          underCategories={underCategories}
          addUnderCategory={addUnderCategory}
          deleteUnderCategory={deleteUnderCategory}
        />
      ))}
    </ul>
  );
};