import * as types from "../ActionTypes";

export const addCategory = (category) => ({
  type: types.ADD_CATEGORY,
  category,
});
export const deleteCategory = (id) => ({ type: types.DELETE_CATEGORY, id });
