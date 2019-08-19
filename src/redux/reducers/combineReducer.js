import { combineReducers } from "redux";
import upmReducer from "./upm";
import caseReducer from "./case";
import snackReducer from "./snack";
import workFlowReducer from "./workFlow";
import modalsReducer from "./modals";
import paymenttReucer from "./payment";
import attachmentReducer from "./attachments";

const mainReducer = combineReducers({
  upm: upmReducer,
  Case: caseReducer,
  snack: snackReducer,
  workFlow: workFlowReducer,
  modals: modalsReducer,
  payment: paymenttReucer,
  attachments: attachmentReducer
});

export default mainReducer;
