import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="header-color" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Emilio Ditrocchio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link hre="#link">Projects</Nav.Link>
            <Nav.Link href="#home">Skills</Nav.Link>
            <Nav.Link hre="#link">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
              <div className="page-content" />
              <Main/>
      </React.Fragment>

    );
  }
}

export default App;
