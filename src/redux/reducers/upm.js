import * as Types from "../constants/types";
import {setRoles} from "../constants/roles"

const initialState = {
  errorAlert: null,
  loginResponse: null,
  updatePasswordResponse: null,
  userRole: null,
  userProfile: {data:[{username:null , fisrtName:null , lastName:null}]},
  updateProfileResponse:null,
  role:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_LOGIN_ERROR_ALERT:
      return {
        ...state,
        errorAlert: action.payload
      };
    case Types.USER_LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse: action.payload
      };
    case Types.UPDATE_PASSWIRD_RESPONSE:
      return {
        ...state,
        updatePasswordResponse: action.payload
      };
    case Types.USER_ROLE:
let role = setRoles(action.payload)
      return {
        ...state,
        userRole: action.payload,
        role:role
      };
    case Types.USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    case Types.UPDATE_PROFILE_RESPONSE:
      return {
        ...state,
        updateProfileResponse: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
