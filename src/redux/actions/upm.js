import * as Types from "../constants/types";
import axios from "axios";
//import jwt from "jwt-decode";

const Url = process.env.REACT_APP_REST_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + sessionStorage.getItem("token");

// const setAxiosConfig = () => {
//   axios.defaults.headers.common["Content-Type"] = "application/json";
//   axios.defaults.headers.common["Authorization"] =
//     "Bearer " + sessionStorage.getItem("token");
// };

export const userLogin = data => async dispatch => {
  try {
    const result = await axios.post(`${Url}api/login`, data, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
    if (result.status === 200) {
      dispatch({
        type: Types.SHOW_ALERT,
        payload: {
          open: true,
          content: "شما با موفقیت وارد سامانه شدید",
          type: "success"
        }
      });
    }
    dispatch({ type: Types.USER_LOGIN_RESPONSE, payload: result });
    sessionStorage.setItem("token", result.data.access_token);
    setUserRole();
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: Types.SHOW_ALERT,
      payload: {
        open: true,
        content: error.response
          ? error.response.data.error_description
          : "هنگام ورود خطایی رخ داده است.",
        type: "error"
      }
    });
  }
};




