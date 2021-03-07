import React, { useState } from "react";
import Modal from "./Modal";

const Launch = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <h5>{item.mission_name}</h5>
      </div>
      <Modal flight_number={item.flight_number} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Launch;
