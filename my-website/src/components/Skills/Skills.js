import React from "react";
import "./Skills.css";
import translate from "../../translate";

const Skills = () => {
  return (
    <div className="body">
      <div className="skill">
        <div className="skillinfo">
          <ul>
            <p className="skill-category">✨ Frontend Development:</p>
            <li>React: Proficient in building dynamic user interfaces</li>
            <li>React DOM: Expertise in DOM manipulation with React</li>
            <li>React Node: Skilled in integrating React with backend services</li>
            <li>HTML & CSS: Strong foundation in creating and styling web pages</li>
            <br />

            <p className="skill-category">⚙️ Backend Development:</p>
            <li>PHP: Experienced in server-side scripting and web development</li>
            <li>SQL: Competent in database management and query optimization</li>
            <br />

            <p className="skill-category">🛠️ DevOps & Tools:</p>
            <li>Docker: Knowledgeable in containerization for streamlined development and deployment</li>
            <li>Git: Proficient in version control and collaborative development</li>
            <br />

            <p className="skill-category">📌 Professional Background:</p>
            <li className="background-item">
              <span className="icon"></span> Software Engineering Degree at <span className="imp">RTU MIREA</span> (expected 2024)
            </li>
            <li className="background-item">
              <span className="icon"></span> Holds Russian <span className="imp">ВНЖ</span> (Residence Permit)
            </li>
            <li className="background-item">
              <span className="icon"></span> Current: Customer Support (developing transferable soft skills)
            </li>
            <br />

            <p className="skill-category">🌐 Languages:</p>
            <li>English</li>
            <li>Russian</li>
            <li>Arabic</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;