import React /*{ useEffect }*/ from 'react';
import { TodoList } from '../../components/TodoList';
import { AddTodo } from '../../components/AddTodo';
import { SelectTab } from '../../components/SelectTab';

export const TodoComponent = ({ todos, addTodo, setDone, tab, setTab }) => {

  return (
    <>
      <header>ToDo List</header>
      <TodoList todos={todos} setDone={setDone} />
      <AddTodo addTodo={addTodo} />
      <SelectTab setTab={setTab} tab={tab} />
    </>
  );
};
