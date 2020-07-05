import { ADD_UNDER_CATEGORY, DELETE_UNDER_CATEGORY } from "../ActionTypes";

const initialState = { list: [] };

export const underCategories = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UNDER_CATEGORY:
      return {
        ...state,
        list: [
          ...state.list,
          { ...action.underCategory, id: state.list.length },
        ],
      };
    case DELETE_UNDER_CATEGORY:
      return {
        ...state,
        list: state.list.filter(
          (underCategory) => underCategory.id !== action.id
        ),
      };
    default:
      return state;
  }
};
