import * as types from '../ActionTypes';

export const addCategory = () => ({type: types.ADD_CATEGORY, category});
export const deleteCategory = () => ({type: types.DELETE_CATEGORY, id});