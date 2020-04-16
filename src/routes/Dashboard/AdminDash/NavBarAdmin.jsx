import React from "react";
import { Link } from "react-router-dom";
// import styles from "./DashboardRoutes.module.css";

const NavBarAdmin = () => {
  return (
    <ul>
      <li>
        <Link to="/dash/admin">Dashboard</Link>
      </li>
      <li>
        <Link to="/dash/admin/settings">Settings</Link>
      </li>
      <li>
        <Link to="/dash/admin/profile">Profile</Link>
      </li>
      <li>
        <Link to="/dash/admin/reports">Reports</Link>
      </li>
    </ul>
  );
};

export default NavBarAdmin;
