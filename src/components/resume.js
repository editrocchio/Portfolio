import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Resume extends React.Component {
  render() {
    return (

        <div className="bgDark">
          <Container className="resWrapper">
              <h1>Resume</h1>

          <Row>
            <Col>
            <h3>Education</h3>
            <hr />
            <h5>Computer Systems Technology Diploma</h5>
            <h5>British Columbia Institute of Technology</h5>
            <p><i>September 2018 - December 2020 (expected)</i></p>
            </Col>
          </Row>
           <Row>
                <Col>
                    <p><b>Relevant Coursework:</b></p>
                    <ul>
                        <li><p>Object-Oriented Programming</p></li>
                        <li><p>Web Development</p></li>
                        <li><p>Agile Systems Design</p></li>
                        <li><p>Discrete Mathematics</p></li>
                    </ul>
                </Col>
           </Row>

           <Row>
             <Col>
             <h5>Psychology Bachelor's Degree</h5>
             <h5>Simon Fraser University</h5>
             <p><i>September 2008 - December 2012</i></p>
             <p>Developed critical thinking, report writing, and presentation skills.</p>
             </Col>
           </Row>

           <Row>
             <Col>
             <h3>Work Experience</h3>
             <hr />
             <h5>Agile Developer Intern</h5>
             <h5>SAP</h5>
             <p><i>May 2018 - present</i></p>
             </Col>
           </Row>

          </Container>
        </div>
    )
  }
}

export default Resume;
