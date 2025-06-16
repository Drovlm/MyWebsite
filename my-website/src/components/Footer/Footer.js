import React from 'react';
import './Footer.css';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <p>© {new Date().getFullYear()} Mudar Jannoud</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;