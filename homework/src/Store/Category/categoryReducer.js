import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_UNDER_CATEGORY,
  DELETE_UNDER_CATEGORY,
} from "../ActionTypes";

const initialState = { categories: []};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          { ...action.category, categoryId: state.categories.length, underCategories: []},
        ],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.categoryId !== action.categoryId
        ),
      };
    case ADD_UNDER_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) => 
        category.categoryId !== action.categoryId ? category : {...category, underCategories: [ 
          ...category.underCategories, {...action.underCategory, underCategoryId: category.underCategories.length, todo: []}
        ]})
      };
    // case DELETE_UNDER_CATEGORY:
    //   return {
    //     ...state,
    //     categories: state.category.underCategories.filter((underCategory) => underCategory.underCategoryId !== action.underCategoryId)
    //   };
    default:
      return state;
  }
};
