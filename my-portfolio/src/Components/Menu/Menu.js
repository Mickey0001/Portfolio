import React from 'react';
import Logo from '../../../src/Images/MirzaLogo.png';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

const externalLink = "https://juniorlearnstocode.blogspot.ba";
  
const Menu = () => (

<Navbar inverse fixedTop collapseOnSelect>

  <Navbar.Header>
    <Navbar.Brand>
    <a href="#headerwrap"><img alt="Mirza Sisic Web Developer logo" src={Logo}/></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem  href="#headerwrap">Home</NavItem>
      <NavItem  href="#aboutwrap">About</NavItem>
      <NavItem  href="#Resume">Resume</NavItem>
      <NavItem  href="#workwrap">Projects</NavItem>
      <NavItem  href="#Contact">Contact</NavItem>
      <NavItem href={externalLink} target="_blank" rel="noopener noreferrer">Blog</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Menu;