import React, { useState } from "react";
import Filters from "./Filters";
import Launches from "./Launches";

const DashBoard = (props) => {
  const [type, setType] = useState("all");
  const [launchStatus, setLaunchStatus] = useState("");
  return (
    <div>
      <h1>Dashboard</h1>
      <Filters
        type={type}
        setType={setType}
        launchStatus={launchStatus}
        setLaunchStatus={setLaunchStatus}
      />
      <Launches />
    </div>
  );
};

export default DashBoard;
