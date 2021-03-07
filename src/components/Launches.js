import React from "react";
import Launch from "./Launch";
import { connect } from "react-redux";

const Launches = (props) => {
  return (
    <div>
      <h4>Launches</h4>
      <div>
        {console.log(props.launch)}
        {props.launch.map((item) => {
          return <Launch item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { launch: state.launch };
};

export default connect(mapStateToProps, null)(Launches);
