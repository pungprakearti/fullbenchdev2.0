import React, { Component } from 'react';
import SideBar from './SideBar';
import Section from './Section';
import ContentWindow from './ContentWindow';

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
            <div className="Home-left">
              <div className="Home-name">Andrew Pungprakearti</div>
              <div className="Home-title">developer</div>
            </div>
            <div className="Home-hostname">{window.location.hostname}</div>
          </div>
          <div className="Home-main-cont">
            <SideBar showSection={this.showSection} />
            <ContentWindow />
            <div className="Home-game-board-cont">
              <div className="Home-game-board">
                <Section name="redux" />
                <Section name="python" />
                <Section name="gatsby" />
                <Section name="react" />
                <Section name="graphql" />
                <Section name="fullstack" />
                <Section name="css" />
                <Section name="express" />
                <Section name="psql" />
                <Section name="javascript" />
                <Section name="jquery" />
                <Section name="flask" />
                <Section name="jsx" />
                <div className="Home-game-board-stats">stats go here</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
