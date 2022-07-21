import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar({ handleShowMenu }) {
  return (
    <ul>
      <NavLink to="/" onClick={() => handleShowMenu()}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/Menu" onClick={() => handleShowMenu()}>
        <li>Menu</li>
      </NavLink>
      <NavLink to="/Contact" onClick={() => handleShowMenu()}>
        <li>Contact</li>
      </NavLink>
      <div className="img1-responsive-menu " />
    </ul>
  );
}

export default Navbar;
