import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header, About, Contact, Skills } from "./components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
