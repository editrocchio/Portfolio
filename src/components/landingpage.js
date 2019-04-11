import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    textAlign: "center",
    margin: "15% 0 0 25%",
    width: "100%",
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>

        <Grid item xs={6}>

          <Typography component="h1">
            Emilio Ditrocchio

          </Typography>
          <Typography component="h2">
             BCIT Computer Systems Technology Student
           </Typography>
            <Typography variant="subtitle2">
            Android | Java | JavaScript | Python | HTML/CSS | OracleDB
          </Typography>

        </Grid>

      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
