import * as Types from "../constants/types";

export const showSnack = data => async dispatch => {
  dispatch({ type: Types.SHOW_ALERT, payload: data });
};
