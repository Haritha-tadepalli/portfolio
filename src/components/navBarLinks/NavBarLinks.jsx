import React from "react";
import {useState} from 'react';
import "./navBarLinks.css";
import {FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
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

const NavBarLinks = () => {

    const [toggleIcon, setToggleIcon] = useState(false);
  
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

  return (
    <div className="navBarLink">
      <ul className="nav_list">
        {data.map((item, key) => (
          <li key = {key} className="nav_list__links">
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav_icons" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size = {30}/> : <FaBars size = {30}/>
            }
      </div>
    </div>
  );
};

export default NavBarLinks;
