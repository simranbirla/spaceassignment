import React from "react";
import Login from "./Login";
import DashBoard from "./Dashboard";
import { connect } from "react-redux";
const App = (props) => {
  return <div>{props.auth.sign_in ? <DashBoard /> : <Login />}</div>;
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
