import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header, About, Contact, Skills, Footer } from "./components";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          {" "}
          {}
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
        </I18nextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
