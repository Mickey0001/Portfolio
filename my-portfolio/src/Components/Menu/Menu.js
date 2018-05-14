import React from 'react';
import Logo from '../../../src/Images/MirzaLogo.png';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const externalLink = "https://juniorlearnstocode.blogspot.ba";
  
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
      <NavItem eventKey={1} href="#Resume">
          Resume
      </NavItem>
      <NavItem eventKey={2} href="#workwrap">
         Projects
      </NavItem>
      <NavItem eventKey={2} href="#Clients">
        Clients
      </NavItem>
      <NavItem eventKey={2} href="#Contact">
           Contact
      </NavItem>
      <MenuItem href={externalLink} target="_blank" rel="noopener noreferrer" eventKey={2}>
           Blog
      </MenuItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Menu;