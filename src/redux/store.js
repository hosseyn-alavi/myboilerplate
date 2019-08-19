import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/combineReducer";
import logger from 'redux-logger'

export const store = createStore(mainReducer, applyMiddleware(thunk,logger));
