import * as Types from "../constants/types";

const initialState = {
  setPriceModal: {
    open: false,
    caseNumber: null
  },
  setReturnModal: {
    open: false,
    caseNumber: null
  },
  setSubmitNotifyModal:{
    open:false,
    caseNumber:null
  },
  setShowModal:{
      open:false,
      caseNumber:null
  },
  setCaseDictumModal:{
      open:false,
      caseNumber:null
  },
  setCaseClose:{
    open:false,
    caseNumber:null
  },
  setPayment:{
    open:false,
    caseNumber:null
  },
  workFlowModal:{
    open:false,
    caseNumber:null
  },
  paymentsLitsModal:{
    open:false,
    caseNumber:null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_PRICE_MODAL:
      return { ...state, setPriceModal: action.payload };
    case Types.SET_RETURN_MODAL:
      return { ...state, setReturnModal: action.payload };
    case Types.SET_SUBMIT_NOTIFY_MODAL:
      return { ...state, setSubmitNotifyModal: action.payload };
    case Types.SET_SHOW_MINUTES_MODAL:
      return { ...state, setShowModal: action.payload };
    case Types.SET_CASE_DICTUM_MODAL:
      return { ...state, setCaseDictumModal: action.payload };
    case Types.SET_CASE_CLOSE:
      return { ...state, setCaseClose: action.payload };
    case Types.SET_PAYMENT_MODAL:
      return { ...state, setPayment: action.payload };
    case Types.SET_WORK_FLOW_MODAL:
      return { ...state, workFlowModal: action.payload };
    case Types.SET_PAYMENTS_LIST_MODAL:
      return { ...state, paymentsLitsModal: action.payload };
    default:
      return state;
  }
};

export default reducer;
