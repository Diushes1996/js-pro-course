import * as types from "../ActionTypes";

export const addCategory = (category) => ({
  type: types.ADD_CATEGORY,
  category,
});

export const deleteCategory = (id) => ({
  type: types.DELETE_CATEGORY,
  id,
});

export const addUnderCategory = (underCategory) => ({
  type: types.ADD_UNDER_CATEGORY,
  underCategory,
});

export const deleteUnderCategory = (id) => ({
  type: types.DELETE_UNDER_CATEGORY,
  id,
});
