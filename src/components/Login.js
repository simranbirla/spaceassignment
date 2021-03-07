import React from "react";
import { connect } from "react-redux";
import { signIn, allLaunches } from "../redux/actions";
import Button from "@material-ui/core/Button";
import "../Styling/Login.css";
const Login = (props) => {
  const signIn = () => {
    props.signIn();
    props.allLaunches("", 1);
  };
  return (
    <div className="login_page">
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS2L8_XTuFyKIHyVVldkcL7fnmkPfp-mopg&usqp=CAU`}
        alt="logo"
      />
      <h2>Login with Google</h2>
      <Button variant="contained" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, allLaunches })(Login);
