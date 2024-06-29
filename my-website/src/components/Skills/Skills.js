import React from "react";
import "./Skills.css";
import translate from "../../translate";
const Skills = () => {
  return (
    <body className="body">
      <div className="skill">
        <div className="skillinfo">
          <ul>
            <ul>Frontend Development:</ul>
            <li>React: Proficient in building dynamic user interfaces</li>
            <li>React DOM: Expertise in DOM manipulation with React</li>
            <li>
              React Node: Skilled in integrating React with backend services
            </li>
            <li>
              HTML & CSS: Strong foundation in creating and styling web pages
            </li>
            <br></br>
            <ul>Backend Development: </ul>
            <li>
              PHP: Experienced in server-side scripting and web development
            </li>
            <li>
              SQL: Competent in database management and query optimization
            </li>
            <br></br>
            <ul>DevOps & Tools:</ul>
            <li>
              Docker: Knowledgeable in containerization for streamlined
              development and deployment
            </li>
            <li>
              Git: Proficient in version control and collaborative development
            </li>
            <br></br>
            <ul>Languages:</ul>
            <li>English</li>
            <li>Russian</li>
            <li>Arabic</li>
          </ul>
        </div>
      </div>
    </body>
  );
};
export default Skills;
