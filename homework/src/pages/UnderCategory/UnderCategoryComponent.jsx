import React from "react";
import { AddUnderCategory } from "../../Components/UnderCategory/AddUnderCategory";
import { UnderCategoryList } from "../../Components/UnderCategory/UnderCategoryList";

export const UnderCategoryComponent = ({
  underCategories,
  addUnderCategory,
  deleteUnderCategory,
}) => {
  return (
    <>
      <header>Подкатегории</header>
      <AddUnderCategory addUnderCategory={addUnderCategory} />,
      <UnderCategoryList
        underCategories={underCategories}
        deleteUnderCategory={deleteUnderCategory}
      />
    </>
  );
};
