import React, { useState } from 'react';

export const AddCategory = ({ addCategory }) => {
  const [input, setInput] = useState('');
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => addCategory({ text: input})}>Add Category</button>
    </>
  );
};
