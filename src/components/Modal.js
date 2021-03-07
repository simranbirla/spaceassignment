import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import "../Styling/Modal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "black",
  },
}));

export default function TransitionsModal({ open, setOpen, flight_number }) {
  const classes = useStyles();
  const [info, setInfo] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      });
    return () => {
      setInfo();
    };
  }, [flight_number]);

  return (
    <div className="modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {info ? (
              <>
                {" "}
                <h2 id="transition-modal-title">{info.mission_name}</h2>
                <hr />
                <div id="transition-modal-description">
                  <p>Rocket Name:{info.rocket.rocket_name}</p>

                  <div>
                    <p>{info.details}</p>
                    <p>Launch Site : {info.launch_site.site_name}</p>
                    <p>Date : {info.launch_date_local.split("T")[0]}</p>
                    <p>Time : {info.launch_date_local.split("T")[1]}</p>
                  </div>
                  <p>
                    {" "}
                    <a href={info.links.wikipedia}>More Info</a>
                  </p>
                </div>
              </>
            ) : (
              "Loading"
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
