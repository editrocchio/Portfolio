import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import About from './aboutme.js'
import CenteredTabs from './projecttabs.js'
import Avatar from '@material-ui/core/Avatar';
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
import androidstud from '../tab_images/android.png'


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
      marginTop: "15%"
  },

  about: {
      margin: "0 auto",
      color: "black"
  },
  paper: {
      color: "black",

  },

  divider: {
      color: "black",
      width: "100%"
  },

  projects: {
      margin: "0 auto",
      marginTop: "200px"
  },

  avatar: {
      margin: 10,
      width: 60,
      height: 60,
      display: "inline-block"
  },
  languages: {
      color: "black",
  },


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
                  <Typography component="h4">
                  Agile Developer Intern - SAP
                </Typography>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </Grid>

              <About/>

              <Grid item xs={8} className={classes.projects}>
                  <Paper className={classes.paper} elevation={2}>
                  <Typography component="h1">
                    Projects
                  </Typography>
                  <CenteredTabs/>
                </Paper>
              </Grid>

              <Grid item xs={8} className={classes.projects}>
                    <Paper className={classes.root} elevation={2}>
                    <Typography component="h1" className={classes.languages}>
                      Skills
                      <Divider variant="middle"/>
                    </Typography>
                    <Typography component="h3" className={classes.languages}>
                        Languages
                    </Typography>
                    <Avatar alt="java" src={java} className={classes.avatar} />
                    <Avatar alt="js" src={js} className={classes.avatar} />
                    <Avatar alt="py" src={py} className={classes.avatar} />
                    <Typography component="h3" className={classes.languages}>
                        Tools and Framworks
                    </Typography>
                    <Avatar alt="android" src={android} className={classes.avatar} />
                    <Avatar alt="firebase" src={firebase} className={classes.avatar} />
                    <Avatar alt="git" src={git} className={classes.avatar} />
                    <Avatar alt="react" src={react} className={classes.avatar} />
                    <Avatar alt="oracle" src={oracle} className={classes.avatar} />
                    <Typography component="h3" className={classes.languages}>
                        Web Development
                    </Typography>
                    <Avatar alt="html" src={html} className={classes.avatar} />
                    <Avatar alt="jquery" src={css} className={classes.avatar} />
                    <Avatar alt="css" src={jquery} className={classes.avatar} />
                    <Avatar alt="rest" src={rest} className={classes.avatar} />


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
