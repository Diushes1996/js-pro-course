import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {rootReducer} from './combaine';

export const store = createStore(rootReducer, devToolsEnhancer);