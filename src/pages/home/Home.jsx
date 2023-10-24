import React from "react";
import "./home.css";
import {useState, useEffect} from 'react';
import myCV from "../../assets/HarithaTadepalliCV.pdf";
import ContactBar from '../../components/contactBar/ContactBar.jsx';

const Home = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
            }, 2000);
            return () => clearTimeout(timer);
    }, []);


  return (
    <section id="home" className="home">
      {showButton && <ContactBar />  }
      <div className="home__wrapper">
        <div className="home__verticalLine"></div>
        <div className="home__main">
          <div className="home__mainText">
            <h1 className="helloText">Hello,</h1>
            <h1 className="introText">
              <span className="introText__myName">My Name is</span>
              <span className="introText__name">Haritha Tadepalli</span>
              <br />
              <span className="introText__line2">I am a</span>
              <span className="introText__frontEnd">FrontEnd Developer</span>
            </h1>
          </div>
          <div className="home__buttons">
            {showButton && 
                <a href={myCV} download>
                  <button className="button__downloadCV" >Download CV</button>
                </a>
              }
            {showButton && <a className="button_letsTalk" href="#contact">Let's Talk</a> }
          </div>
        </div>
        <div className="home__contactIcons">
            
        </div>
      </div>
    </section>
  );
};

export default Home;
