import React, { Component } from 'react';
import profile from '../bcit-nov28-2316.png'
import Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  about: {
      flexGrow: 1,
      color: "black",
      textAlign: "center",
      width: "100%",
      margin: "0 auto"
  },

  paper: {
      height: "500px",
  },

  aboutTitle: {
      float: "left",
      marginLeft: "20px"
  },

  myPic: {
      height: "50%",
      float: "left",
      margin: "20px 500px 0 20px"
  },
  aboutText: {
      fontSize: "10pt",
      paddingTop: "70px",
      paddingRight: "80px"
  }
});

class About extends Component {
  render() {
      const { classes } = this.props;
    return (
        <Grid item xs={8} className={classes.about}>
            <Paper className={classes.paper} elevation={2}>
                <Typography component="h1" className={classes.aboutTitle}>
                  About Me
                </Typography>
                    <img src={profile} alt="profile_pic" className={classes.myPic}/>
                <Typography component="h4" className={classes.aboutText}>
                Lorem ipsum conubia enim mi primis netus aliquam rhoncus, vestibulum ut iaculis etiam cubilia ut mauris hendrerit sociosqu cubilia etiam mauris.
                Phasellus augue ad ornare eleifend orci curabitur est ut, massa congue senectus faucibus dictum gravida ante nisl, nullam leo egestas dui est mollis adipiscing.

                </Typography>
            </Paper>
        </Grid>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
