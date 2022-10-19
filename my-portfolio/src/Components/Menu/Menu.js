import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../src/Images/MirzaLogo.png";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => (
  <Navbar inverse fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img alt="Mirza Sisic Web Developer logo" src={Logo} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/contact">Contact</Link>
        <a target="_blank" href="https://juniorlearnstocode.blogspot.ba">
          Blog
        </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
