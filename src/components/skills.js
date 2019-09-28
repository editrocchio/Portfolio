import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import java from '../languages/java.png'
import js from '../languages/js.png'
import py from '../languages/python.png'
import android from '../frameworks/android.png'
import firebase from '../frameworks/firebase.png'
import git from '../frameworks/git.png'
import oracle from '../frameworks/oracle.png'
import react from '../frameworks/react.png'
import css from '../web/css.png'
import html from '../web/html.png'
import jquery from '../web/jquery.png'
import rest from '../web/rest.png'
import postgres from '../frameworks/postgres.png'

class TechSkills extends React.Component {
  render() {
    return (
        <div class="bgDark" id="skills">
             <Container className="skillsWrapper">
                <Row>
                    <Col>
                         <h1><b>Technical Skills</b></h1>
                         <hr className="titleHr" />
                    </Col>
                </Row>

                 <Row>
                   <Col>
                     <h4>Programming Languages</h4>
                     <Image src={java} fluid className="skillsImg"/>
                     <Image src={js} fluid className="skillsImg"/>
                     <Image src={py} fluid className="skillsImg"/>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <h4>Tools and Frameworks</h4>
                     <Image src={android} fluid className="skillsImg"/>
                     <Image src={git} fluid className="skillsImg"/>
                     <Image src={react} fluid className="skillsImg"/>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <h4>Web</h4>
                     <Image src={html} fluid className="skillsImg"/>
                     <Image src={css} fluid className="skillsImg"/>
                     <Image src={jquery} fluid className="skillsImg"/>
                     <Image src={rest} fluid className="skillsImg"/>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <h4>Database</h4>
                     <Image src={firebase} fluid className="skillsImg"/>
                     <Image src={oracle} fluid className="skillsImg"/>
                     <Image src={postgres} fluid className="skillsImg"/>
                   </Col>
                 </Row>

             </Container>
         </div>
    )
  }
}

export default (TechSkills);
