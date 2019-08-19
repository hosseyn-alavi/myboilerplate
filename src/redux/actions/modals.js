import * as Types from "../constants/types";

export const setShowModal = data => async dispatch => {
  dispatch({ type: Types.SET_SHOW_MINUTES_MODAL, payload: data });
};

