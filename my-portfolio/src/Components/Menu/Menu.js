import React from 'react';
import Logo from '../../../src/Images/MirzaSisicLogo.png';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

  
const Menu = () => (
<Navbar inverse fixedTop collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <a href="#headerwrap"><img alt="MS logo" src={Logo}/></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#aboutwrap">
          About
      </NavItem>
      <NavItem eventKey={2} href="#workwrap">
         Projects
      </NavItem>
      <NavItem eventKey={2} href="#Recommendations">
        Recommendations
      </NavItem>
      <NavItem eventKey={2} href="#contact">
           Contact
      </NavItem>
      <NavItem target="_blank" rel="noopener noreferrer" eventKey={2} href="https:juniorlearnstocode.blogspot.ba">
           Blog
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Menu;