import React from "react";

export const UnderCategoryItem = ({ text, deleteUnderCategory }) => {
  return (
    <li>
      <input type="checkbox"></input>
      <button onClick={deleteUnderCategory}>X</button>
      <p>{text}</p>
    </li>
  );
};
