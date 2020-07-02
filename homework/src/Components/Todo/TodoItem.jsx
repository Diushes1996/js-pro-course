import React from 'react';
import styles from './todoItem.module.css';

export const TodoItem = ({text, done, setDone, deleteTodo }) => {
  return (
    <li className={styles.container}>
      <input type="checkbox" checked={done} onChange={setDone}></input>
      <button onClick = {deleteTodo}>X</button>
      <p>{text}</p>
    </li>
  );
};
