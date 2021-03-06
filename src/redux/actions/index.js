import { auth, provider } from "../../firebase";
import * as actions from "../actions/type";

export const signIn = () => {
  return (dispatch) => {
    dispatch({ type: actions.LOADING_USER });
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({ type: actions.SIGN_IN, payload: res.user });
      })
      .catch((err) => alert(err));
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: actions.LOADING_USER });
    auth
      .signOut()
      .then((res) => {
        dispatch({ type: actions.SIGN_OUT });
      })
      .catch((err) => alert(err));
  };
};
