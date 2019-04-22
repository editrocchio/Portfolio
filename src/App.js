import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LandingPage from './components/landingpage.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="header-color" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Emilio Ditrocchio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks">
            <AnchorLink href='#aboutLink'><Nav.Link>About Me</Nav.Link></AnchorLink>
            <AnchorLink href='#projectLink'><Nav.Link>Projects</Nav.Link></AnchorLink>
            <AnchorLink href='#skillLink'><Nav.Link>Skills</Nav.Link></AnchorLink>
            <AnchorLink href='#resLink'><Nav.Link>Resume</Nav.Link></AnchorLink>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
              <div className="page-content" />
              <LandingPage/>
      </React.Fragment>

    );
  }
}

export default App;
