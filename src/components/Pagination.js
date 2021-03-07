import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { pastLaunches, upcomingLaunches, allLaunches } from "../redux/actions";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    backgroundColor: "white",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
}));
function PaginationControlled(props) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    props.setPage(value);
    if (props.type === "all") {
      props.allLaunches(props.launchStatus, value);
    } else if (props.type === "past") {
      props.pastLaunches(props.launchStatus, value);
    } else if (props.type === "upcoming") {
      props.upcomingLaunches(props.launchStatus, value);
    }
  };

  return (
    <div className={classes.root}>
      <Pagination count={10} page={props.page} onChange={handleChange} />
    </div>
  );
}

export default connect(null, { upcomingLaunches, pastLaunches, allLaunches })(
  PaginationControlled
);
