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
 
// import About from './About';
// import Usersdata from './Users';
// import Formsignup from './Formsignup';
 const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
       <main>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
     
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Feedback">Feedback</Link></li>
          <li><Link to="/Usersdata">Usersdata</Link></li>
          <li><Link to="/Newform">Forms </Link></li>
          <li><Link to="/fetchform">Fetch Forms </Link></li>

          </ul>
          </nav>
          </main>
           
         
 </div>
  );
}


export default Header;