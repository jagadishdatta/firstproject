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
    <div>
       <main>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
     
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Feedback">Feedback</Link></li>
          </ul>
          </nav>
          </main>
           
        <Router>
        <Switch>
           <Route  path="/about" exact component={About}>
             <About />
           </Route>
         
         </Switch>

        </Router>
 </div>
  );
}


export default Header;