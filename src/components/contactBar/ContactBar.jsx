import React from "react";
import './contactBar.css';
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai';

const ContactBar = () => {
    return (
        <div className="contactBar">
            {/* <h5>ContactBar</h5> */}
            <a href="https://www.linkedin.com/in/haritha-tadepalli/" className="icon__linkedIn" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin size = "1.75rem" />
            </a>
            <a href="https://github.com/Haritha-tadepalli" className="icon__gitHub" target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub size = "1.75rem" />
            </a>
            <a href="https://www.instagram.com/haritha_tadepalli" className="icon__instagram" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram size = "1.75rem" />
            </a>
        </div>
    )
};

export default ContactBar;