import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, setDone, deleteTodo, todo }) => {
  return (
    <ul>
      {todos.map(({ text, id, done }) => (
        <TodoItem key={id} text={text} done={done} setDone={() => setDone(id)} deleteTodo={()=>deleteTodo(id)}/>
      ))}
    </ul>
  );
};
