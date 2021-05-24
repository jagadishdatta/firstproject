import React, { useState,useContext} from 'react';

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
 
  import { UsersProvider } from '../components/contextapi/UsersfromContext';
  // import { PageContext } from '../components/PageContextProvider';

 const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const { user } = useContext(PageContext);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div>
       
       <main>
      <nav>
        <ul>
        <li><Link to="/">Home </Link></li>
     
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Feedback">Feedback</Link></li>
          <li><Link to="/Usersdata">Usersdata</Link></li>
          <li><Link to="/Newform">Forms </Link></li>
          <li><Link to="/fetchform">Fetch Forms </Link></li>
          <li><Link to="/crudexample">Crud Example</Link></li>
          <li><Link to="/contextapi">Context Api  Example</Link></li> 
          </ul>
          </nav>
          </main>
           
         
 </div>
  );
}


export default Header;