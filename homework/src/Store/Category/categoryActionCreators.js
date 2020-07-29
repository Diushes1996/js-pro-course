import * as types from "../ActionTypes";

export const addCategory = (category, categoryId) => ({
  type: types.ADD_CATEGORY,
  category,
  categoryId,
});

export const deleteCategory = (categoryId) => ({
  type: types.DELETE_CATEGORY,
  categoryId,
});

export const addUnderCategory = (underCategory, underCategoryId) => ({
    type: types.ADD_UNDER_CATEGORY,
    underCategory,
    underCategoryId,
});

export const deleteUnderCategory = (underCategoryId) => ({
  type: types.DELETE_UNDER_CATEGORY,
  underCategoryId,
});
