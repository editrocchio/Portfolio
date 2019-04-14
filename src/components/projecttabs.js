import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MediaCard from './tabcard.js';
import sa from '../logos/stay_alert_logo.png'
import ar from '../logos/ar_logo.png'
import tc from '../logos/tc_logo.png'
import sa_web from '../logos/sa_web_logo.png'
import wd from '../logos/wd_logo.png'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = {
  root: {
    flexGrow: 1,
  },
  android: {

  }
};


class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Android"/>
          <Tab label="Web Development" />
          <Tab label="Python" />
        </Tabs>
        {value === 0 && <TabContainer >
            <MediaCard name="Stay Alert" description="Real time VPD crime alerts" link1="Google Play Store" logo={sa} href1="https://play.google.com/store/apps/details?id=com.crime.emilio.stayalert"/>
            <MediaCard name="AR Ground" description="Working with augmented reality" link1="GitHub" href1="https://github.com/editrocchio/AR-Ground" logo={ar}/>
        </TabContainer>}
        {value === 1 && <TabContainer>
            <MediaCard name="Talking Card" description="Voice controlled cue cards" link1="Firebase" href1="https://co-op-hackathon.firebaseapp.com/" link2="GitHub" href2="https://github.com/editrocchio/Talking-Card" logo={tc}/>
            <MediaCard name="Stay Alert Web" description="Real time VPD crime alerts" link1="Firebase" href1="https://stayalert-85212.firebaseapp.com" link2="GitHub" href2="https://github.com/editrocchio/StayAlertWeb" logo={sa_web}/>
            <MediaCard name="Portfolio" description="Portfolio webpage made with React" link1="URL" href1="google.com" link2="GitHub" href2="https://github.com/editrocchio/Portfolio"/>
        </TabContainer>}
        {value === 2 && <TabContainer>
            <MediaCard name="Withdrawal Automator" description="Business auotomation tool" link1="GitHub" href1="https://github.com/editrocchio/WDAutomator" logo={wd}/>
        </TabContainer>}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
