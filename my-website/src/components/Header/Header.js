import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const handleaboutClick = () => {
    navigate("/about");
  };
  const handleSkillsClick = () => {
    navigate("/skills");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="rearhead">
      <div className="headerreal">
        <section className="logoName">
          <p id="name">Mudar Jannoud</p>
        </section>

        <div className="options">
          

         {/* <div className="lang">
            <a onClick={() => handleLanguageChange("en")}>EN</a>
            <p>/</p>
            <a a onClick={() => handleLanguageChange("ru")}>
              РУ
            </a>
            <p>/</p>
            <a a onClick={() => handleLanguageChange("ar")}>
              ع
            </a>
          </div>*/}


          <div className="info">
            <div className="aboinfo" tabIndex="1" id="about">
              <a onClick={handleaboutClick}>About me</a>
            </div>
            <div className="skills" tabIndex="1" id="skills">
              <a onClick={handleSkillsClick}>Skills</a>
            </div>
            <div className="contact" tabIndex="1" id="contact">
              <a onClick={handleContactClick}>Contact</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};
export default Header;
