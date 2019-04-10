import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../bcit-nov28-2316.png'

class Landing extends Component {
  render() {
    return (
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={profile} alt='profile_pic' className='profile-img'/>

            <div className='banner-text'>

              <h1>BCIT Computer Systems Technology Student</h1>
              <hr/>
              <p>Android | Java | JavaScript | Python | HTML/CSS | OracleDB</p>

              <div className="social-links">
                {/*Linkedin*/}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>

                {/*GitHub*/}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
