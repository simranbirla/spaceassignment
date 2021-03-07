import React, { useState } from "react";
import Modal from "./Modal";
import "../Styling/Launch.css";

const Launch = ({ item }) => {
  const [open, setOpen] = useState(false);

  const showDate = () => {
    const date = new Date(item.launch_date_unix).getDate();
    const mm = new Date(item.launch_date_unix).getMonth() + 1;
    const yyyy = new Date(item.launch_date_unix).getFullYear();
    return date + "/" + mm + "/" + yyyy;
  };
  showDate();
  return (
    <div className="launch">
      <div onClick={() => setOpen(true)} className="launch_contain">
        <div className="name">
          <h3 className="launch_name">{item.mission_name}</h3>
          <p className="details">{item.details}</p>
        </div>
        <div>
          <h5 className="launch_date">{showDate()}</h5>
          {item.launch_success ? (
            <p className="status success">Success</p>
          ) : (
            <p className="status failed">Failed</p>
          )}
        </div>
      </div>
      <Modal flight_number={item.flight_number} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Launch;
