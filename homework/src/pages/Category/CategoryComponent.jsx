import React from "react";
import { AddCategory } from "../../Components/Category/AddCategory";
import { CategoryList } from "../../Components/Category/CategoryList";

export const CategoryComponent = ({
  categories,
  addCategory,
  deleteCategory,
}) => {
  return (
    <>
      <header>Категории</header>
      <AddCategory addCategory={addCategory} />,
      <CategoryList categories={categories} deleteCategory={deleteCategory} />
    </>
  );
};
