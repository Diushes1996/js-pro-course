import * as types from "../ActionTypes";

export const addUnderCategory = (underCategory) => ({
  type: types.ADD_UNDER_CATEGORY,
  underCategory,
});
export const deleteUnderCategory = (id) => ({
  type: types.DELETE_UNDER_CATEGORY,
  id,
});
