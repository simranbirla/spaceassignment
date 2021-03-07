import { auth, provider } from "../../firebase";
import * as actions from "../actions/type";
import axios from "axios";

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

export const allLaunches = () => {
  return (dispatch) => {
    axios
      .get(`https://api.spacexdata.com/v3/launches?limit=10&launch_success`)
      .then((res) => {
        console.log(res);
        dispatch({ type: actions.ALL_LAUNCHES, payload: res.data });
      })
      .catch((err) => alert(err));
  };
};

export const pastLaunches = () => {
  return (dispatch) => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches/past?limit=10&launch_success`
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: actions.PAST_LAUNCHES, payload: res.data });
      })
      .catch((err) => alert(err));
  };
};

export const upcomingLaunches = () => {
  return (dispatch) => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches/upcoming?limit=10&launch_success`
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: actions.UPCOMING_LAUNCHES, payload: res.data });
      })
      .catch((err) => alert(err));
  };
};

//launch_success
