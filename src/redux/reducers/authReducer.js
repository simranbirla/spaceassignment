import * as actions from "../actions/type";

const AuthReducer = (state = { sign_in: false }, action) => {
  switch (action.type) {
    case actions.SIGN_IN:
      return { ...state, loading: false, sign_in: true, user: action.payload };
    case actions.LOADING_USER:
      return { ...state, loading: true };
    case actions.SIGN_OUT:
      return { ...state, loading: false, sign_in: false, user: null };
    default:
      return state;
  }
};

export default AuthReducer;
