import React from 'react';
import { CategoryItem } from './CategoryItem'

export const CategoryList = ({categories, deleteCategory}) => {
  return (
    <ul>
      {categories.map(({ text, id }) => (
        <CategoryItem key = {id} text={text} deleteCategory={() => deleteCategory(id)}/>
        ))}
    </ul>
  );
};