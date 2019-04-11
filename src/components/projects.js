import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import sa from '../stay_alert_logo.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

toggleCategories() {
  if(this.state.activeTab===0) {
    return(

      <div className="projects-grid">
        {/*Stay Alert*/}
        <div id="sa">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:'black', height:'176px', background: "url(" + sa + ") center" }}>Stay Alert</CardTitle>
            <CardText>Hello</CardText>
            <CardActions border>
              <Button colored href="https://play.google.com/store/apps/details?id=com.crime.emilio.stayalert">Google Play Store</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>

        <div id="ar">
          {/*AR Ground*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:'black', height:'176px', background: "url(" + sa + ") center" }}>AR Ground</CardTitle>
            <CardText>Hello</CardText>
            <CardActions border>
              <Button colored href="https://github.com/editrocchio/AR-Ground">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      </div>
    )
  } else if(this.state.activeTab===1) {
    return(
      <div><h1>Python</h1></div>
    )
  } else if(this.state.activeTab===2) {
    return(
      <div><h1>Web</h1></div>
    )
  }
}

  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Android</Tab>
          <Tab>Python</Tab>
          <Tab>Web</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
