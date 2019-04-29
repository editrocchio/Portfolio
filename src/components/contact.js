import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handleMessageChange = (e) => {
    this.setState({message: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    ReactDOM.findDOMNode(this.refs.nRef).value = '';
    ReactDOM.findDOMNode(this.refs.mRef).value = '';
    ReactDOM.findDOMNode(this.refs.eRef).value = '';
    this.setState({name: ''});
    this.setState({email: ''});
    this.setState({message: ''});

    var msg = {name: this.state.name, email: this.state.email, message: this.state.message};

    this.sendFeedback(
      "portfolio_template",
      msg,
      "user_hJSBUeV2ykBNl7potQURR")

    alert("Thanks for your message!");
  }

  sendFeedback (templateId, msg, id) {
    emailjs.send(
      'mailgun',
      templateId,
      msg,
      id)
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  render() {
    return (
        <div className='initial' >
            <Container>
              <Row id="contactTitle">
                <Col>
                    <div className="landingText" id='bottomText'>
                      <h1><b>Get in Touch</b></h1><br/>
                      <p>Want something built or to collaborate on a project? Email me at editrocchio@gmail.com or message me below</p>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col>
              <Form id='form'>
                <Form.Group controlId={"exampleForm.ControlInput1"}>
                  <Form.Control type="text" placeholder="Name" name='name' value={this.state.name} onChange={this.handleNameChange} ref="nRef"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Control type="email" placeholder="Email" name='email' value={this.state.email} onChange={this.handleEmailChange} ref="eRef"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows="5" placeholder="Message" name='message' value={this.state.message} onChange={this.handleMessageChange} ref="mRef"/>
                </Form.Group>
                <Button variant="contained" type='button' onClick={this.handleSubmit}>
                 <b>SEND</b>
               </Button>
              </Form>
            </Col>
            </Row>
            </Container>
        </div>
    )
  }
}



export default (Contact);
