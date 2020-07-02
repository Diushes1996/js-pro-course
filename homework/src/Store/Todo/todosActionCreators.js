import * as types from '../ActionTypes';

export const addTodo = (todo) => ({ type: types.ADD_TODO, todo });
export const deleteTodo = (id) => ({type: types.DELETE_TODO, id})
export const setDone = (id) => ({ type: types.SET_TODO_DONE, id });
export const setTab = (tab) => ({ type: types.SET_TAB, tab });
