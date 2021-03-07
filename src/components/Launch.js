import React from "react";
import Modal from "./Modal";

const Launch = ({ item }) => {
  return (
    <div>
      <h5>{item.mission_name}</h5>
      <Modal flight_number={item.flight_number} />
    </div>
  );
};

export default Launch;
