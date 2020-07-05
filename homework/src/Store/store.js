import { todos } from "./Todo/todosReducer";
import { categories } from "./Category/categoryReducer";
import { underCategories } from "./UnderCategory/underCategoryReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

export const combineProperties = combineReducers({
  categories,
  todos,
  underCategories,
});

export const store = createStore(
  combineProperties,
  composeWithDevTools(applyMiddleware(thunk))
);
