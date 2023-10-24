import React from "react";
import "./skills.css";

const Skills = () => {
  const words = [
    'C', 'C++', 'Java', 'Python', 'DSA',
    'RAML', 'HTML', 'CSS', 'JavaScript',
    'ReactJS', 'Git', 'VLSI', 'MuleSoft',
    'SOA', 'MFT', 'GIT'
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
