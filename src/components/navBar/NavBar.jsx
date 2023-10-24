import React from 'react';
import './navBar.css';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react'; // Import useEffect to handle screen width changes
import ht_logo from '../../assets/ht_logo.png';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "../../utils.js/particles";


const data = [
  {
    label: 'Home',
    to: 'home',
    offset: -200,
  },
  {
    label: 'About',
    to: 'about',
    offset: -150,
  },
  {
    label: 'Projects',
    to: 'projects',
    offset: -150,
  },
  {
    label: 'Contact',
    to: 'contact',
    offset: -150,
  },
];

const NavBar = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const renderParticlesJsInHomePage = currentSection === 'home';

  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeNavBar = () => {
    if (toggleIcon) {
      setToggleIcon(false);
    }
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth > 700) {
        setToggleIcon(false);
      }
    };
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset < 200) {
        setCurrentSection('home');
      } else if (offset < 1000) {
        setCurrentSection('about');
      } else if (offset < 1500) {
        setCurrentSection('projects');
      } else {
        setCurrentSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="navMain">
    <div className="navBar">
      <div className="nav_welcome">
        <div className="nav_icons" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX /> : <FaBars />}
        </div>
        <Link to="home"
          smooth={true}
          duration={50}
          offset={-200}
          ignoreCancelEvents={true}
          onClick={closeNavBar}
          activeClass="active"
        >
          <img src={ht_logo} alt="logo" className="nav_logo" />
        </Link>
      </div>
      <ul className={toggleIcon ? 'active' : 'navBarLink'}>
        {data.map((item, key) => (
          <li key={key} className="nav_list__links">
            <Link to={item.to}
              // spy={true}
              smooth={true}
              duration={50}
              offset={item.offset}
              ignoreCancelEvents={true}
              onClick={closeNavBar}
              activeClass="active">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    {/* {renderParticlesJsInHomePage && <Particles id="particles" options={particles} init={particlesInit} />} */}
    </section>
  );
};

export default NavBar;
