import React from "react";

export const CategoryItem = ({ text, deleteCategory }) => {
  return (
    <li>
      <input type="checkbox"></input>
      <button onClick={deleteCategory}>X</button>
      <p>{text}</p>
    </li>
  );
};
