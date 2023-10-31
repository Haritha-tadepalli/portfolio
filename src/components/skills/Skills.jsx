import React from "react";
import "./skills.css";

const Skills = () => {
  const words = [
    'ReactJS', 'JavaScript', 'HTML', 'CSS', 
    'DSA', 'C++', 'Java', 'Python', 
    'MuleSoft', 'SOA', 'MFT', 'GIT',
    'Jenkins','RAML','C', 'VLSI', 
  ];

  return (
    // <div className="skills__list">

    // </div>
    <div className="grid-container">
      {words.map((word, index) => (
        <div className="box" key={index}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default Skills;
