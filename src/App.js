
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Jumbotron } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content ';
function App() {
  return (
    <div>
       <Header />
       <Content /> 
      <Footer />
     </div>
  );
}

export default App;
