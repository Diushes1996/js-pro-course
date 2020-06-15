import  {combineReducers} from 'redux';
import {counter} from './counter';
import {hi} from './hi';

export const rootReducer = combineReducers({
    counter,
    hi,
})