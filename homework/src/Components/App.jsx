import React from 'react';
import {Provider} from 'react-redux';
import {Todo} from '../Todo';
import {store} from '../Store/store'

export const App = () => {
    return(
      <Provider store={store}>
        <Todo/>
      </Provider>
    );
};