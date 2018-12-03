import React, { Component } from 'react';
import SideBar from './SideBar';
import Section from './Section';
import ContentWindow from './ContentWindow';
import Gem from './Gem';
import { FaLock } from 'react-icons/fa';
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import LilTanks from './LilTanks';
import DITL from './DITL';
import IMDB from './IMDB';
import Resume from './Resume';
import Lipslut from './Lipslut';
import Jobly from './Jobly';
import FloodFill from './FloodFill';
import Spiral from './Spiral';
import Leveret from './Leveret';
import Contact from './Contact';

import './Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      content: '',
      fees: {
        //feeSection:[green, blue, purple, orange]
        javascript: [0, 0, 0, 0],
        python: [0, 0, 0, 0],
        css: [0, 0, 0, 0],
        jquery: [0, 0, 0, 0],
        flask: [0, 0, 0, 0],
        psql: [0, 0, 0, 0],
        express: [0, 0, 0, 0],
        react: [0, 0, 0, 0],
        redux: [0, 0, 0, 0],
        jsx: [0, 0, 0, 0],
        gatsby: [0, 0, 0, 0],
        graphql: [0, 0, 0, 0],
        fullstack: [0, 0, 0, 0]
      }
    };

    this.linkBtntoSec = {
      welcome: <Section name="javascript" reward={<Gem color="green" />} />,
      aboutMe: (
        <Section
          name="python"
          reward={
            <React.Fragment>
              <Gem color="green" />
              <Gem color="green" />
            </React.Fragment>
          }
        />
      ),
      lilTanks: (
        <Section name="css" reward={<Gem color="green" auto={true} />} />
      ),
      DITL: <Section name="jquery" reward={<Gem color="blue" />} />,
      IMDB: (
        <Section
          name="flask"
          reward={
            <React.Fragment>
              <Gem color="blue" />
              <Gem color="blue" />
            </React.Fragment>
          }
        />
      ),
      resume: <Section name="psql" reward={<Gem color="blue" auto={true} />} />,
      lipslut: <Section name="express" reward={<Gem color="purple" />} />,
      jobly: (
        <Section
          name="react"
          reward={
            <React.Fragment>
              <Gem color="purple" />
              <Gem color="purple" />
            </React.Fragment>
          }
        />
      ),
      floodFill: (
        <Section name="redux" reward={<Gem color="purple" auto={true} />} />
      ),
      spiral: <Section name="jsx" reward={<Gem color="orange" />} />,
      leveret: (
        <Section
          name="gatsby"
          reward={
            <React.Fragment>
              <Gem color="orange" />
              <Gem color="orange" />
            </React.Fragment>
          }
        />
      ),
      contact: (
        <Section name="graphql" reward={<Gem color="orange" auto={true} />} />
      )
    };
    this.showSection = this.showSection.bind(this);
    this.showContent = this.showContent.bind(this);
  }

  showSection(section) {
    if (this.state.sections.indexOf(section) === -1) {
      this.setState({ sections: [...this.state.sections, section] });
    }
  }

  //change this into an object to keep it consistent with the rest of the code.
  showContent(contentName) {
    switch (contentName) {
      case 'welcome':
        return this.setState({
          content: <Welcome />
        });
      case 'aboutMe':
        return this.setState({
          content: <AboutMe />
        });
      case 'lilTanks':
        return this.setState({
          content: <LilTanks />
        });
      case 'DITL':
        return this.setState({
          content: <DITL />
        });
      case 'IMDB':
        return this.setState({
          content: <IMDB />
        });
      case 'resume':
        return this.setState({
          content: <Resume />
        });
      case 'lipslut':
        return this.setState({
          content: <Lipslut />
        });
      case 'jobly':
        return this.setState({
          content: <Jobly />
        });
      case 'floodFill':
        return this.setState({
          content: <FloodFill />
        });
      case 'spiral':
        return this.setState({
          content: <Spiral />
        });
      case 'leveret':
        return this.setState({
          content: <Leveret />
        });
      case 'contact':
        return this.setState({
          content: <Contact />
        });
      default:
        return;
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
            <SideBar
              showSection={this.showSection}
              showContent={this.showContent}
            />
            <ContentWindow content={this.state.content} />
            <div className="Home-game-board-cont">
              <div className="Home-game-board">
                {this.state.sections.map(section => this.linkBtntoSec[section])}
                {this.state.sections.length === 12 ? (
                  <Section name="fullstack" />
                ) : (
                  ''
                )}
                <div className="Home-game-board-stats">stats go here</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
