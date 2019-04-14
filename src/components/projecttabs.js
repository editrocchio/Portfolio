import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MediaCard from './tabcard.js';
import sa from '../logos/stay_alert_logo.png'

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
            <MediaCard name="Stay Alert" description="Real Time VPD Crime Alerts" link1="Google Play Store" link2="share" logo={sa} href1="google.com"/>
            <MediaCard name="AR Ground" description="In Development" link1="GitHub" link2="share" />
        </TabContainer>}
        {value === 1 && <TabContainer>
            <MediaCard name="Talking Card" description="Crazy ass app lol" />
            <MediaCard name="Stay Alert Web" description="Crazy ass app lol"/>
            <MediaCard name="Portfolio" description="Crazy ass app lol"/>
        </TabContainer>}
        {value === 2 && <TabContainer>
            <MediaCard name="Withdrawal Automator" description="Crazy ass app lol"/>
        </TabContainer>}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
