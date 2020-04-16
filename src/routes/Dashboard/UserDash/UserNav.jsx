import React from "react";
import { Link } from "react-router-dom";
// import styles from "./DashboardRoutes.module.css";

const UserNav = () => {
  return (

    < ul >
      <li>
        <Link to="/dash/user">User DashBoard</Link>
      </li>
      <li>
        <Link to="/dash/user/myextra">My Extra</Link>
      </li>
      <li>
        <Link to="/dash/user/profile">Profile</Link>
      </li>
      <li>
        <Link to="/dash/user/contactadmin">Contact Admin</Link>
      </li>
      <li>
        <Link to="/dash/user/buyextra">Buy Extra</Link>
      </li>
    </ul >
  );
};

export default UserNav;
