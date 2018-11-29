import React, { Component } from 'react';
import SideBar from './SideBar';
import './Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: []
    };
    this.showSection = this.showSection.bind(this);
  }

  showSection(section) {
    if (this.state.show.indexOf(section) === -1) {
      this.setState({ show: [...this.state.show, section] });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="Home-cont">
          <div className="Home-header-cont">
            <div className="Home-name">Andrew Pungprakearti</div>
            <div className="Home-title">developer</div>
            <div className="Home-hostname">{window.location.hostname}</div>
          </div>
          <div className="Home-main-cont">
            <SideBar showSection={this.showSection} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
