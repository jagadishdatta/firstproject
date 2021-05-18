
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Jumbotron } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Feedback from './components/Feedback';
import Usersdata from './components/Users';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Newform from './components/Forms/index'; 
import fetchform from './components/fetchform';
import './css/style.css';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Footer />

      <Route path="/" exact component={Home} /> 
      <Route path="/About"  component={About}/>
      <Route path="/Feedback"  component={Feedback}/>
      <Route path="/Usersdata"  component={Usersdata}/>
      <Route path="/Newform"  component={Newform}/>
      <Route path="/fetchform" component={fetchform}  />

      
    </div>
  </Router>
  );
}

export default App;
