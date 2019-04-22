import React from 'react';
import PropTypes from 'prop-types';
import MediaCard from './tabcard.js';
import sa from '../logos/stay_alert_logo.png';
import ar from '../logos/ar_logo.png';
import tc from '../logos/tc_logo.png';
import sa_web from '../logos/sa_web_logo.png';
import wd from '../logos/wd_logo.png';
import port from '../logos/portfolio_logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Paper from '@material-ui/core/Paper';

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
        <div className="bgDark">
          <Container className="proWrapper">
            <Row>
                <Col>
                    <h1>Projects</h1>
                    <hr/>
                </Col>
            </Row>
            <Paper elevation={2}>
            <Row>
                <Col>
                  <Tabs defaultActiveKey="android">
                    <Tab eventKey="android" title="Android">
                      <MediaCard name="Stay Alert" description="Real time VPD crime alerts" link1="Google Play Store" logo={sa} href1="https://play.google.com/store/apps/details?id=com.crime.emilio.stayalert"/>
                      <MediaCard name="AR Ground" description="Working with augmented reality" link1="GitHub" href1="https://github.com/editrocchio/AR-Ground" logo={ar}/>
                    </Tab>
                    <Tab eventKey="web" title="Web Development">
                      <MediaCard name="Talking Card" description="Voice controlled cue cards" link1="Firebase" href1="https://co-op-hackathon.firebaseapp.com/" link2="GitHub" href2="https://github.com/editrocchio/Talking-Card" logo={tc}/>
                      <MediaCard name="Stay Alert Web" description="Real time VPD crime alerts" link1="Firebase" href1="https://stayalert-85212.firebaseapp.com" link2="GitHub" href2="https://github.com/editrocchio/StayAlertWeb" logo={sa_web}/>
                      <MediaCard name="Portfolio" description="Portfolio made with React" link1="URL" href1="google.com" link2="GitHub" href2="https://github.com/editrocchio/Portfolio" logo={port}/>
                    </Tab>
                    <Tab eventKey="python" title="Python">
                      <MediaCard name="WD Automator" description="Business automation tool" link1="GitHub" href1="https://github.com/editrocchio/WDAutomator" logo={wd}/>
                    </Tab>
                  </Tabs>

                </Col>
            </Row>
            </Paper>
          </Container>
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (CenteredTabs);
