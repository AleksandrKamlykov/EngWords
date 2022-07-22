import { wordsReducer } from './wordsReducer';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({ wordsReducer });
