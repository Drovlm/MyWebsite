import React from "react";
import "./Header.css";
import { useNavigate } from 'react-router-dom' ;

const Header = () => {
  const navigate = useNavigate()
  const handleaboutClick = () => {
    navigate("/about");
  };
  const handleSkillsClick = () => {
    navigate("/skills");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <header className="header">
      <div className="headerreal">
      <section className="logoName">
        <p>Mudar Jannoud</p>
      </section>

      <div className="options">
        <div className="lang">
          <a>EN</a>
          <p>/</p>
          <a>РУ</a>
          <p>/</p>
          <a>ع</a>
        </div>
        <div className="info">
          <div className="aboinfo" tabIndex="1" id="about">
            <a onClick={handleaboutClick}>
              About me
            </a>
          </div>
          <div className="skills" tabIndex="1" id="skills">
            <a onClick={handleSkillsClick}>
              Skills
            </a>
          </div>
          <div className="contact" tabIndex="1" id="contact">
            <a onClick={handleContactClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
      </div>
    </header>
  
  );
};
export default Header;
