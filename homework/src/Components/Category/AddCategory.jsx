import React, { useState } from 'react';

export const AddCategory = () => {
  const [input, setInput] = useState('');
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button>Add Category</button>
    </>
  );
};
