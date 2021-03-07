import React from "react";
import { connect } from "react-redux";
import { pastLaunches, upcomingLaunches, allLaunches } from "../redux/actions";
import Date from "./Date";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "../Styling/Filters.css";
const Filters = (props) => {
  const onChangeHandle = (e) => {
    props.setLaunchStatus(e.target.value);
    if (props.type === "all") {
      props.allLaunches(e.target.value, props.page);
    } else if (props.type === "past") {
      props.pastLaunches(e.target.value, props.page);
    } else if (props.type === "upcoming") {
      props.upcomingLaunches(e.target.value, props.page);
    }
  };

  const onClickHandle = (time) => {
    if (time === "all") {
      props.setType(time);
      props.allLaunches(props.launchStatus, props.page);
    } else if (time === "past") {
      props.setType(time);
      props.pastLaunches(props.launchStatus, props.page);
    } else if (time === "upcoming") {
      props.setType(time);
      props.upcomingLaunches(props.launchStatus, props.page);
    }
  };

  return (
    <div className="filters">
      <div className="filters_btns">
        <ButtonGroup>
          <Button
            onClick={() => onClickHandle("all")}
            size="large"
            variant="contained"
            aria-label="large outlined primary button group"
          >
            All
          </Button>
          <Button
            onClick={() => onClickHandle("past")}
            size="large"
            variant="contained"
            aria-label="large outlined primary button group"
          >
            Past
          </Button>
          <Button
            onClick={() => onClickHandle("upcoming")}
            size="large"
            variant="contained"
            aria-label="large outlined primary button group"
          >
            Upcoming
          </Button>
        </ButtonGroup>
      </div>
      <div className="filters_status">
        <select onChange={onChangeHandle}>
          <option value="">All</option>
          <option value="true">Success</option>
          <option value="false">Failure</option>
        </select>
      </div>
      <div className="filters_date">
        <Date page={props.page} launchStatus={props.launchStatus} />
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
