import React from "react";
import Login from "./Login";
import DashBoard from "./Dashboard";
import { connect } from "react-redux";
const App = (props) => {
  return (
    <div>
      {console.log(props)}
      {props.auth.sign_in ? <DashBoard /> : <Login />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, launch: state.launch };
};

export default connect(mapStateToProps)(App);
