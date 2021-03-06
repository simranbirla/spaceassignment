import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../redux/actions";

const Login = (props) => {
  return (
    <div className="login__page">
      <h2>Login with Google</h2>
      {console.log(props.auth)}
      <button onClick={props.signIn}>SignIn</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(Login);
