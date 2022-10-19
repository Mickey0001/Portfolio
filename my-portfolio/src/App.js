import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Wrapper/Wrapper";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import ContactPage from "./Pages/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/activities" element={<Projects />} />
        <Route path="/contact" element={<Wrapper comp={ContactPage} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
