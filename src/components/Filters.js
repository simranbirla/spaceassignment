import React from "react";
import { connect } from "react-redux";
import { pastLaunches, upcomingLaunches, allLaunches } from "../redux/actions";

const Filters = (props) => {
  const onChangeHandle = (e) => {
    props.setLaunchStatus(e.target.value);
    if (props.type === "all") {
      props.allLaunches(e.target.value);
    } else if (props.type === "past") {
      props.pastLaunches(e.target.value);
    } else if (props.type === "upcoming") {
      props.upcomingLaunches(e.target.value);
    }
  };

  const onClickHandle = (time) => {
    if (time === "all") {
      props.setType(time);
      props.allLaunches(props.launchStatus);
    } else if (time === "past") {
      props.setType(time);
      props.pastLaunches(props.launchStatus);
    } else if (time === "upcoming") {
      props.setType(time);
      props.upcomingLaunches(props.launchStatus);
    }
  };

  return (
    <div>
      <h2>Filters</h2>
      <button onClick={() => onClickHandle("all")}>All</button>
      <button onClick={() => onClickHandle("past")}>Past</button>
      <button onClick={() => onClickHandle("upcoming")}>Upcoming</button>
      <div>
        <select onChange={onChangeHandle}>
          <option value="">All</option>
          <option value="true">Success</option>
          <option value="false">Failure</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, launch: state.launch };
};

export default connect(mapStateToProps, {
  pastLaunches,
  upcomingLaunches,
  allLaunches,
})(Filters);
