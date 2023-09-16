import React from 'react'
import './navBar.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import NavBarLinks from '../navBarLinks/NavBarLinks'
import ht_logo from '../../assets/ht_logo.png'
import {FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';

const NavBar = () =>{

    const [toggleIcon, setToggleIcon] = useState(false);
  
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div className='navBar'>
            <div className='nav_welcome'>
                <div className="nav_icons" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX/> : <FaBars/>
                    }
                </div>
                <Link to = "/" >
                    <img src={ht_logo} alt="logo" className='nav_logo'/>
                </Link>
            </div>
            <NavBarLinks toggleFlag = {toggleIcon}/>
        </div>
    )
}

export default NavBar;