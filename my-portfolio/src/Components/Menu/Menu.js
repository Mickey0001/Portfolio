import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../src/Images/MirzaLogo.png";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const externalLink = "https://juniorlearnstocode.blogspot.ba";

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
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/resume">Resume</Link>
        </NavItem>
        <NavItem>
          <Link to="/activities">Activities</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
        <NavItem href={externalLink} target="_blank" rel="noopener noreferrer">
          Blog
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
