import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header, About, Contact, Skills, Footer } from "./components";
import { initReactI18next } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
 
        <initReactI18next i18n={i18n}>
          <Header />
          <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
<Route path="/Footer" element={<Footer />} />
          </Routes>
        </initReactI18next>
      </BrowserRouter>
    </div>
  );
};

export default App;