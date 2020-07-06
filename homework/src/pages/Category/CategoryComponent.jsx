import React from "react";
import { AddCategory } from "../../Components/Category/AddCategory";
import { CategoryList } from "../../Components/Category/CategoryList";
import { AddUnderCategory } from "../../Components/UnderCategory/AddUnderCategory";

export const CategoryComponent = ({
  categories,
  addCategory,
  deleteCategory,
  addUnderCategory,
}) => {
  return (
    <>
      <header>Категории</header>
      <AddCategory addCategory={addCategory} />,
      <AddUnderCategory addUnderCategory={addUnderCategory} />,
      <CategoryList categories={categories} deleteCategory={deleteCategory} />
    </>
  );
};
