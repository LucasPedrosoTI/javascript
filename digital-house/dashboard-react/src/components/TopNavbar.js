import React from "react";
import { FiBell, FiMail } from "react-icons/fi";

import "../css/TopNavbar.css";

function Navbar({ title }) {
  return (
    <nav className="navbar_container">
      <ul className="navbar_ul">
        <li>
          <div className="icon_note_wrapper">
            <FiBell className="navbar_icon" />
            <span>7</span>
          </div>
        </li>
        <li>
          <div className="icon_note_wrapper">
            <FiMail className="navbar_icon" />
            <span>3</span>
          </div>
        </li>
        <li>
          <hr />
        </li>

        <li>
          <figure className="navbar_figure">
            <legend>{title}</legend>
            <img
              className="navbar_img"
              src="../../assets/walter-white.jpg"
              alt="walter-white"
            />
          </figure>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
