import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import {useState, useEffect} from 'react';
import myCV from "../../assets/myCV.pdf";
import ContactBar from '../../components/contactBar/ContactBar.jsx';

const Home = () => {

    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate('/contact');
    };

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
            }, 2000);
        
            // Clear the timer when the component unmounts (optional)
            return () => clearTimeout(timer);
    }, []);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = {myCV};
        link.target = '_blank';
        link.download = 'myCV.pdf';
    
        link.click();
      };


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
            {showButton && <button className="button__downloadCV" onClick={downloadCV}>Download CV</button>}
            {/* {showButton && <a className="button_downloadCV" href="/src/assets/HarithaTResumeSDE.pdf" download="HarithaTResumeSDE.pdf">Download CV</a>} */}
            {showButton && <button className="button_letsTalk" onClick={navigateToContact}>Let's Talk</button> }
          </div>
        </div>
        <div className="home__contactIcons">
            
        </div>
      </div>
    </section>
  );
};

export default Home;
