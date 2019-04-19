import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Resume extends Component {
  render() {
    return (
      <Container className="aboutWrapper">
        <Row>
          <Col>
              <h1>Work Experience</h1>
              <hr />
          </Col>
       </Row>
      </Container>
    )
  }
}

export default Resume;
