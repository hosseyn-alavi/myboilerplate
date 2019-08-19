import * as Types from "../constants/types";

const initialState = { data: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
