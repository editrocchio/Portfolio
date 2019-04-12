import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
        <div className="demo-big-content">
            <Layout>
                <Header className='header-color' title="Title" scroll>
                    <Navigation>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
