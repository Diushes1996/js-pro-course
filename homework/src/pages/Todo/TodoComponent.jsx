import React from "react";
import { TodoList } from "../../Components/Todo/TodoList";
import { AddTodo } from "../../Components/Todo/AddTodo";
import { SelectTab } from "../../Components/SelectTab";

export const TodoComponent = ({
  todos,
  addTodo,
  setDone,
  tab,
  setTab,
  deleteTodo,
}) => {
  return (
    <>
      <header>todo-list</header>
      <AddTodo addTodo={addTodo} />
      <SelectTab setTab={setTab} tab={tab} />
      <TodoList todos={todos} setDone={setDone} deleteTodo={deleteTodo} />
    </>
  );
};
