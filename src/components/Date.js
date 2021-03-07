import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { dateLaunches } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function DatePickers(props) {
  const classes = useStyles();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const handleChange = (e, type) => {
    if (type === "start") {
      setStart(e.target.value);
    } else {
      setEnd(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!start || !end) {
      return alert("Enter Valid Date");
    }
    props.dateLaunches(start, end, props.launchStatus, props.page);
  };
  return (
    <form className={classes.container} noValidate onSubmit={handleSubmit}>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue={new Date()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleChange(e, "start")}
      />
      <TextField
        id="date"
        label="End Date"
        type="date"
        defaultValue={new Date()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleChange(e, "end")}
      />
      <button>Launch</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  console.log(state.launch);
  return { launch: state.launch };
};

export default connect(mapStateToProps, { dateLaunches })(DatePickers);
