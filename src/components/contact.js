import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';
import profile from '../bcit-nov28-2316.png'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 id="name">Emilio Ditrocchio</h2>
            <Card shadow={2} style={{width: '256px', height: '256px', background: "url(" + profile + ") center / cover", margin: 'auto'}}>
            </Card>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>helooooooooooooooooooooo</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="social-links">
              {/*Linkedin*/}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>

              {/*GitHub*/}
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github-square" aria-hidden="true"></i>
              </a>

              {/*Email*/}
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-envelope-square" aria-hidden="true"></i>
              </a>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
