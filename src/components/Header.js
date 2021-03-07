import React from "react";
import { connect } from "react-redux";
import { signOut } from "../redux/actions";
import Button from "@material-ui/core/Button";

import "../Styling/Header.css";
const Header = ({ auth, signOut }) => {
  return (
    <div className="header">
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJ52g-HadK-FalvdXwQCF47Vje56_tl5NEw&usqp=CAU`}
        alt="logo"
      />
      <div className="header_sign">
        <div className="header_user">
          <img src={auth.user.photoURL} alt="profile-user" />
          <span>{auth.user.displayName}</span>
        </div>
        <Button
          onClick={signOut}
          variant="contained"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signOut })(Header);
