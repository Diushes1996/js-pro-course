import React from "react";
import { Todo } from "../pages/Todo";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { Category } from "../pages/Category";
import { UnderCategory } from "../pages/UnderCategory";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Category />,
        <UnderCategory />
      </div>
      <div>
        <Todo />,
      </div>
    </Provider>
  );
};
