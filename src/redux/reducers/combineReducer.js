import { combineReducers } from "redux";
import upmReducer from "./upm";
import snackReducer from "./snack";
import modalsReducer from "./modals";

const mainReducer = combineReducers({
  upm: upmReducer,

  snack: snackReducer,

  modals: modalsReducer
});

export default mainReducer;
