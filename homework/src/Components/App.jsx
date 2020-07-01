import React from 'react';
import { Todo } from '../pages/Todo';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import { CategoryComponent } from '../pages/Category/CategoryComponent';

export const App = () => {
  return (
    <Provider store={store}>
      <Todo />,
      <CategoryComponent />
    </Provider>
  );
};
