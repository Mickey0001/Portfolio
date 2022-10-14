import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Wrapper/Wrapper";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";
import ResumePage from "./Pages/Resume/Resume";
import ActivitiesPage from "./Pages/Activities/Activities";
import ContactPage from "./Pages/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Wrapper comp={AboutPage} />} />
        <Route path="/resume" element={<Wrapper comp={ResumePage} />} />
        <Route path="/activities" element={<Wrapper comp={ActivitiesPage} />} />
        <Route path="/contact" element={<Wrapper comp={ContactPage} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
