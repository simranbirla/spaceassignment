import React, { useState } from "react";
import Filters from "./Filters";
import Launches from "./Launches";
import Page from "./Pagination";

const DashBoard = (props) => {
  const [type, setType] = useState("all");
  const [launchStatus, setLaunchStatus] = useState("");
  const [page, setPage] = useState(1);
  return (
    <div>
      <h1>Dashboard</h1>
      <Filters
        type={type}
        setType={setType}
        launchStatus={launchStatus}
        setLaunchStatus={setLaunchStatus}
        page={page}
      />
      <Launches />
      <Page
        page={page}
        setPage={setPage}
        launchStatus={launchStatus}
        type={type}
      />
    </div>
  );
};

export default DashBoard;
