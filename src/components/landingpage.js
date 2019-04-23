import React from 'react';
import About from './aboutme.js';
import CenteredTabs from './projecttabs.js'
import Skills from './skills.js'
import Resume from './resume.js'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class LandingPage extends React.Component {
    render() {
        return (
          <div className="root">
            <div class="initial">
            <section id={'home'}>
                  <Container>
                    <Row>
                      <Col>
                        <div className="landingText">
                          <h1>Emilio Ditrocchio</h1>
                          <hr className="landingHr"/>
                          <h2>BCIT Computer Systems Technology Student</h2>
                            <h4>Agile Developer Intern - SAP</h4>
                        </div>
                      </Col>
                    </Row>
                </Container>
            </section>
          </div>
            <section id={'aboutLink'}>
              <About/>
            </section>
            <section id={'skillLink'}>
             <Skills/>
            </section>
            <section id={'projectLink'}>
             <CenteredTabs/>
            </section>
            <section id={'resLink'}>
             <Resume/>
            </section>
          </div>
        );
    }
}

export default (LandingPage);
