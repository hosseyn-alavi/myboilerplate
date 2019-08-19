import * as Types from "../constants/types";

const initialState = {

  setShowModal:{
      open:false,
      caseNumber:null
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SHOW_MODAL:
      return { ...state, setShowModal: action.payload };
   
    default:
      return state;
  }
};

export default reducer;
