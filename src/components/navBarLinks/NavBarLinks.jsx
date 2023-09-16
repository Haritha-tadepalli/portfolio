import React from "react";
import "./navBarLinks.css";
import {Link} from 'react-router-dom'

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  }
];

const NavBarLinks = (toggleFlag) => {
  return (
    // <div className={toggleFlag ? "active" :"navBarLink"}>
    <div className="navBarLink">
      <ul className="nav_list">
        {data.map((item, key) => (
          <li key = {key} className="nav_list__links">
            <Link to={item.to}>{item.label}</Link>
            {console.log(toggleFlag)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarLinks;
