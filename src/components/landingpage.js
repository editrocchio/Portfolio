import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import profile from '../bcit-nov28-2316.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    textAlign: "center",
    marginTop: "15%",
    width: "100%",
    paddingBottom: "50px"
  },
  about: {
      margin: "0 auto",
      paddingTop: "15%",
  },
  paper: {
      color: "black"
  }

});



function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Typography component="h1">
            Emilio Ditrocchio
          </Typography>
          <Typography component="h2">
             BCIT Computer Systems Technology Student
           </Typography>
            <Typography variant="subtitle2">
            Welcome to my portfolio website
          </Typography>
        </Grid>

        <Grid item xs={6} className={classes.about}>
            <Typography component="h1">
              About Me
            </Typography>

            <Typography component="h4">
            Lorem ipsum conubia enim mi primis netus aliquam rhoncus, vestibulum ut iaculis etiam cubilia ut mauris hendrerit sociosqu cubilia etiam mauris.
            Phasellus augue ad ornare eleifend orci curabitur est ut, massa congue senectus faucibus dictum gravida ante nisl, nullam leo egestas dui est mollis adipiscing.

            </Typography>
        </Grid>

        <Grid item xs={8} className={classes.projects}>
            <Paper className={classes.paper} elevation={1}>
            <Typography component="h1">
              Projects
            </Typography>

            <AppBar position="static">
          <Tabs >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>

          </Paper>


        </Grid>

    </Grid>

    </div>




  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
