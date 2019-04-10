import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

toggleCategories() {
  if(this.state.activeTab===0) {
    return(
      <div><h1>Android</h1></div>
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
        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    )
  }
}

export default Projects;
