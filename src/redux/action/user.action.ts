import jwtAxios from "../../config/service/api/jwt-auth";
import { FETCH_ERROR, FETCH_START, GET_USER_DETAILS, LOGOUT_USER } from "../../config/shared/action.type";

export const getUserDetails = () => {
  return (dispatch: any) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get("auth/verify")
      .then((data) => {
        dispatch({type: GET_USER_DETAILS, payload: data.data})
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
}

export const createUser = (userJson) => {
  return (dispatch: any) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get("auth/verify", userJson)
      .then((data) => {
        dispatch({type: GET_USER_DETAILS, payload: data.data})
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
}

export const logoutUser = () => {
  return (dispatch: any) => dispatch({type: LOGOUT_USER});
}