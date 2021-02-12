import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.util";

import "./header.styles.scss";

const Header = ({ userStatus }) => (
  <section className="container header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {userStatus ? (
        <a href="#" onClick={() => auth.signOut()}>
          Logout
        </a>
      ) : (
        <Link className="option" to="/signin">
          login / signup
        </Link>
      )}
    </div>
  </section>
);

export default Header;
