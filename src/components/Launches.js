import React from "react";
import Launch from "./Launch";
import { connect } from "react-redux";
import "../Styling/Launch.css";

const Launches = (props) => {
  return (
    <div className="launches">
      {console.log(props.launch)}
      {props.launch.map((item) => {
        return <Launch item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { launch: state.launch };
};

export default connect(mapStateToProps, null)(Launches);
