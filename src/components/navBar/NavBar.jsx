import React from 'react'
import './navBar.css'
import {Link} from 'react-router-dom'
import NavBarLinks from '../navBarLinks/NavBarLinks'
import ht_logo from '../../assets/ht_logo.png'

const NavBar = () =>{

    return (
        <div className='navBar'>
            <div className="nav_welcome">
                <Link to = "/" >
                    <img src={ht_logo} alt="logo" className='nav_logo'/>
                </Link>
            </div>
            <NavBarLinks />
        </div>
    )
}

export default NavBar;