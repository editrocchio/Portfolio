import React from 'react';
import About from './aboutme.js';
import CenteredTabs from './projecttabs.js'
import Skills from './skills.js';
import Resume from './resume.js';
import Contact from './contact.js';
import SplitText from './nameanim.js';
import SplitText2 from './titleanim.js';
import SplitText3 from './titleanim2.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class LandingPage extends React.Component {
    render() {
        return (
          <div className="root">
          <section id={'home'}></section>
            <div class="initial" style={{height: window.innerHeight}}>
                  <Container>
                    <Row>
                      <Col>
                        <div className="landingText">
                          <h1><SplitText/></h1>
                          <hr className="landingHr"/>
                          <h2><SplitText2/></h2>
                          <h4><SplitText3/></h4>
                        </div>
                      </Col>
                    </Row>
                </Container>

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
            <section id={'conLink'}>
              <Contact/>
            </section>
          </div>
        );
    }
}

export default (LandingPage);
