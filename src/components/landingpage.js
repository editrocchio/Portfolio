import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import profile from '../bcit-nov28-2316.png'
import CenteredTabs from './projecttabs.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    textAlign: "center",
    width: "100%",
    marginBottom: "10%"
  },

  landing: {
      background: "#0f0c29",  /* fallback for old browsers */
      background: "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",  /* Chrome 10-25, Safari 5.1-6 */
      background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },

  landingText: {
      marginTop: "20%"
  },

  about: {
      margin: "0 auto",
      color: "black"
  },
  paper: {
      color: "black"
  },

  divider: {
      color: "black",
      width: "100%"
  },

  projects: {
      margin: "0 auto",
      marginTop: "10%"
  }

});

class LandingPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
          <div className={classes.root}>
            <Grid container spacing={12} >

              <Grid item xs={12} className={classes.landing}>

                <Typography component="h1" className={classes.landingText}>
                  {'{'} Emilio Ditrocchio {'}'}
                </Typography>
                <Typography component="h2">
                   BCIT Computer Systems Technology Student
                 </Typography>
                  <Typography variant="subtitle2">
                  Welcome to my portfolio website
                </Typography>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </Grid>

              <Grid item xs={6} className={classes.about}>
                  <Paper className={classes.paper} elevation={2}>
                      <Typography component="h1">
                        About Me
                      </Typography>
                      <Divider className={classes.divider}/>
                      <Typography component="h4">
                      Lorem ipsum conubia enim mi primis netus aliquam rhoncus, vestibulum ut iaculis etiam cubilia ut mauris hendrerit sociosqu cubilia etiam mauris.
                      Phasellus augue ad ornare eleifend orci curabitur est ut, massa congue senectus faucibus dictum gravida ante nisl, nullam leo egestas dui est mollis adipiscing.

                      </Typography>
                  </Paper>
              </Grid>

              <Grid item xs={8} className={classes.projects}>
                  <Paper className={classes.paper} elevation={2}>
                  <Typography component="h1">
                    Projects
                  </Typography>
                  <CenteredTabs/>
                </Paper>
              </Grid>
          </Grid>
          </div>
        );
    }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
