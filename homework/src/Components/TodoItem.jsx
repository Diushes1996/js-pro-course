import React from 'react';

export const TodoItem = ({ text, done, setDone }) => {
  return (
    <li className={styles.container}>
      <input type="checkbox" checked={done} onChange={setDone}></input>
      <h1>{text}</h1>
    </li>
  );
};