import { ADD_CATEGORY, DELETE_CATEGORY } from "../ActionTypes";

const initialState = { list: [] };

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        list: [...state.list, { ...action.category, id: state.list.length }],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        list: state.list.filter((category) => category.id !== action.id),
      };
    default:
      return state;
  }
};
