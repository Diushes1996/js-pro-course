import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_UNDER_CATEGORY,
  DELETE_UNDER_CATEGORY,
} from "../ActionTypes";

const initialState = { categories: [], underCategories: [] };

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          { ...action.category, id: state.categories.length },
        ],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.id
        ),
      };
    case ADD_UNDER_CATEGORY:
      return {
        ...state,
        underCategories: [
          ...state.underCategories,
          { ...action.underCategory, id: state.underCategories.length },
        ],
      };
    case DELETE_UNDER_CATEGORY:
      return {
        ...state,
        underCategories: state.underCategories.filter(
          (underCategory) => underCategory.id !== action.id
        ),
      };
    default:
      return state;
  }
};
