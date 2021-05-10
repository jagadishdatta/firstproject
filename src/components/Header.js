import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
import About from './About';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
  <Router> 
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Menu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>   
              <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact us </NavLink>
            </NavItem>
            <NavItem>
            <Link to="./About">about</Link>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
         
        </Switch>
       </div>
       </Router> 
  );
}

export default Header;