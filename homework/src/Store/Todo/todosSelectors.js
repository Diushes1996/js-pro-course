import { Tab } from './todosReducer';

export const getTabTodos = (state) => {
  const done = state.todos.tab === Tab.done;
  return state.todos.list.filter((todo) => todo.done === done);
};
