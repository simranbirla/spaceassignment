import React from "react";
import { connect } from "react-redux";
import { signIn, allLaunches } from "../redux/actions";

const Login = (props) => {
  const signIn = () => {
    props.signIn();
    props.allLaunches();
  };
  return (
    <div className="login__page">
      <h2>Login with Google</h2>
      <button onClick={signIn}>SignIn</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, allLaunches })(Login);
