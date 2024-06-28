import React from "react";
import "./Header.css";
import { useNavigate } from 'react-router-dom' ;

const Header = () => {
  const navigate = useNavigate()
  const handleAboutClick = () => {
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
      <section className="logoName">
        <p>Mudar Jannoud</p>
      </section>

      <div className="options">
        <div className="lang">
          <p1>EN</p1>
          <p>/</p>
          <p1>RU</p1>
          <p>/</p>
          <p1>ع</p1>
        </div>
        <div className="info">
          <div className="aboinfo" tabindex="1" id="about">
            <a href={() => false} onClick={handleAboutClick}>
              About me
            </a>
          </div>
          <div className="skills" tabindex="1" id="skills">
            <a href={() => false} onClick={handleSkillsClick}>
              Skills
            </a>
          </div>
          <div className="contact" tabindex="1" id="contact">
            <a href={() => false} onClick={handleContactClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  
  );
};
export default Header;
