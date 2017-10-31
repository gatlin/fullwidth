import { combineReducers } from 'redux';
import { fullwidthReducer } from './fullwidth';

export const appReducer = combineReducers({
    fullwidth: fullwidthReducer
});
