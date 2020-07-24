import React from "react";
import { Todo } from "../pages/Todo";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { Category } from "../pages/Category";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="root">
        <div className="categories">
          <Category />
        </div>
        <div className="todos">
          <Todo />
        </div>
      </div>
    </Provider>
  );
};
