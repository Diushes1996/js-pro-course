import React from "react";

export const UnderCategoryItem = ({ underCategoryText, deleteUnderCategory }) => {
  return (
    <li>
      <input type="checkbox"></input>
      <button onClick={deleteUnderCategory}>X</button>
      <p>{underCategoryText}</p>
    </li>
  );
};
