import React, { Component } from 'react';
import profile from '../bcit-nov28-2316.png'
import Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  about: {
      flexGrow: 1,
      color: "black",
      textAlign: "center",
      width: "100%",
      margin: "0 auto",
      paddingTop: "50px"
  },

  paper: {
      height: "400px",
  },

  myPic: {
      height: "50%",
      float: "left",
      margin: "10px 0 0 90px"
  },

  aboutTextContainer: {
    width: "550px",
    margin: "0 auto"
  },

  aboutText: {
    fontSize: "10pt",
    textAlign: "justify"
  },

  contactIconContainer: {
    float: "left",
    marginTop: "230px",
    marginLeft: "-182px",

  },

});

class About extends Component {
  render() {
      const { classes } = this.props;
    return (
        <Grid item xs={8} className={classes.about}>
            <Paper className={classes.paper} elevation={2}>
                <Typography component="h1" className={classes.aboutTitle}>
                  About Me
                  <Divider variant="middle"/>
                </Typography>
                    <img src={profile} alt="profile_pic" className={classes.myPic}/>
                  <div className={classes.contactIconContainer}>
                    <a href="https://github.com/editrocchio" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-3x" ></i></a>
                    <a href="https://ca.linkedin.com/in/editrocchio" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin fa-3x" ></i></a>
                    <a href="https://www.facebook.com/ditrocchio" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook-square fa-3x"></i></a>
                    <a href="mailto: editrocchio@gmail.com" rel="noopener noreferrer" target="_blank"><i class="fas fa-envelope-open-text fa-3x" ></i></a>
                  </div>
                  <div className={classes.aboutTextContainer} >
                    <Typography component="h4" className={classes.aboutText}  >
                    I'm a second year student in the Computer Systems Technology program at British Columbia Institute of Technology. I'm currently working as an Agile Developer Intern at SAP.
                    <br/><br/>
                    I started my career with an undergraduate degree in Psychology from SFU. After working in the post secondary system for a number of years, I decided to teach myself how to code
                    and quit my job to pursue the field full time. I love building software and have worked with a number of different frameworks and tools. I've built websites, mobile applications,
                    and business automation software. If you're interested, you can have a look at my portfolio below. Feel free to contact me if you want something built or to collaborate on a
                    project.

                    </Typography>
                  </div>
            </Paper>
        </Grid>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
