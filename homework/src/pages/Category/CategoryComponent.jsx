import React from "react";
import { AddCategory } from "../../Components/Category/AddCategory";
import { CategoryList } from "../../Components/Category/CategoryList";

export const CategoryComponent = ({
  categories,
  addCategory,
  deleteCategory,
  addUnderCategory,
  deleteUnderCategory,
}) => {
  return (
    <>
      <header>Категории</header>
      <div className="test">
        <AddCategory addCategory={addCategory} />
      </div>
      <CategoryList
        categories={categories}
        deleteCategory={deleteCategory}
        addUnderCategory={addUnderCategory}
        deleteUnderCategory={deleteUnderCategory}
      />
    </>
  );
};
