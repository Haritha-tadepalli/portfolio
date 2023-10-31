import React from 'react';
import './projects.css';

const projectData = [
  {
    title: 'College Landing Page',
    description: "A sample college website designed to showcase the college infrastructure, courses offered, extra-cicular activies, testmonilas of alumni's",
    skills: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
 },
 {
    title: 'Design of Content Addressable Memory',
    description: ["A special type of memory cell that is used for rapid search of a word in the memory block.",
    ' The search is done according to the word entered but not through memory locations.',
    ' This can be used in high-speed search engines'],
    skills: ['Verilog', 'VLSI'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-details">
              <h4>{project.title}</h4>
              {/* <ul className="lines-list">
              {project.description.map((line, lineIndex) => (
                  <li key={lineIndex}>{line}</li>
                ))}
                </ul> */}
              <p>{project.description}</p>
              <ul className="skills-list">
                {project.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
