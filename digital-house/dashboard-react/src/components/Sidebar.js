import React from "react";
import {
  FaChartLine,
  FaTachometerAlt,
  FaFolder,
  FaChartBar,
  FaTable,
} from "react-icons/fa";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar_container">
      <div className="sidebar_menu_container">
        <div className="sidebar_logo">
          <FaChartLine />
          <span>ADMIN</span>
        </div>
        <hr />
        <div className="sidebar_dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>
        <hr />
        <h2>Actions</h2>
        <ul className="sibedar_ul">
          <li>
            <FaFolder className="icon" />
            <span>Pages</span>
          </li>
          <li>
            <FaChartBar className="icon" />
            <span>Charts</span>
          </li>
          <li>
            <FaTable className="icon" />
            <span>Tables</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
