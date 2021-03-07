import React from "react";
import { connect } from "react-redux";
import { pastLaunches, upcomingLaunches } from "../redux/actions";

const Filters = (props) => {
  return (
    <div>
      <h2>Filters</h2>
      <button onClick={props.pastLaunches}>Past</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, launch: state.launch };
};

export default connect(mapStateToProps, { pastLaunches, upcomingLaunches })(
  Filters
);
