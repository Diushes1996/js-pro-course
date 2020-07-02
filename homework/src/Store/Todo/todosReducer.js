import { ADD_TODO, SET_TODO_DONE, SET_TAB, DELETE_TODO } from '../ActionTypes';

export const Tab = { done: '0', actual: '1' };

const initialState = { list: [], tab: Tab.actual };

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, list: [...state.list, {...action.todo, id: state.list.length}] };
    case DELETE_TODO:
      return {...state, 
        list: state.list.filter(todo => todo.id !== action.id) };  
    case SET_TODO_DONE:
      return {
        ...state,
        list: state.list.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)),
      };
    case SET_TAB:
      return { ...state, tab: action.tab };
    default:
      return state;
  }
};
