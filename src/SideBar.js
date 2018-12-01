import React, { Component } from 'react';
import './SideBar.scss';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
      //secondary buttons are hidden on startup
      hidden: this.hidden,
      show: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //template for all buttons that should be hidden unless their
  //  primary parent is clicked
  hidden = [
    'lilTanks',
    'DITL',
    'IMDB',
    // 'lipslut',
    'jobly',
    'floodFill',
    'leveret',
    'spiral'
  ];

  //all the buttons from the side bar are here
  sideBarBtns = [
    { name: 'welcome', pos: 'primary', val: 'welcome' },
    { name: 'aboutMe', pos: 'primary', val: 'about me' },
    { name: 'lilTanks', pos: 'secondary', val: 'Lil Tanks' },
    { name: 'DITL', pos: 'secondary', val: 'day in the life' },
    { name: 'IMDB', pos: 'secondary', val: 'motion pictures' },
    { name: 'resume', pos: 'primary', val: 'resumé' },
    // { name: 'projects', pos: 'primary', val: 'projects' },
    { name: 'lipslut', pos: 'secondary', val: 'Lipslut' },
    { name: 'jobly', pos: 'secondary', val: 'jobly' },
    // { name: 'algorithms', pos: 'primary', val: 'algorithms' },
    { name: 'floodFill', pos: 'secondary', val: 'flood fill' },
    { name: 'spiral', pos: 'secondary', val: 'spiral' },
    { name: 'leveret', pos: 'secondary', val: 'leveret' },
    // { name: 'connect', pos: 'primary', val: 'connect' },
    { name: 'contact', pos: 'primary', val: 'contact' }
  ];

  // sideBarBtns = [
  //   { name: 'welcome', pos: 'primary', val: 'welcome' },
  //   { name: 'aboutMe', pos: 'primary', val: 'about me' },
  //   { name: 'lilTanks', pos: 'secondary', val: 'Lil Tanks' },
  //   { name: 'DITL', pos: 'secondary', val: 'day in the life' },
  //   { name: 'IMDB', pos: 'secondary', val: 'motion pictures' },
  //   { name: 'resume', pos: 'primary', val: 'resumé' },
  //   { name: 'projects', pos: 'primary', val: 'projects' },
  //   { name: 'lipslut', pos: 'secondary', val: 'Lipslut' },
  //   { name: 'jobly', pos: 'secondary', val: 'jobly' },
  //   { name: 'algorithms', pos: 'primary', val: 'algorithms' },
  //   { name: 'floodFill', pos: 'secondary', val: 'flood fill' },
  //   { name: 'spiral', pos: 'secondary', val: 'spiral' },
  //   { name: 'leveret', pos: 'secondary', val: 'leveret' },
  //   { name: 'connect', pos: 'primary', val: 'connect' },
  //   { name: 'contact', pos: 'primary', val: 'contact' }
  // ];

  /** show and hide secondary sections on click */
  handleClick(evt) {
    this.props.showSection(evt.target.name);

    switch (evt.target.name) {
      //
      case 'welcome':
        this.setState({ hidden: this.hidden });
        return;

      case 'aboutMe':
        //
        //show Lil Tanks and DITL
        if (this.state.hidden.indexOf('lilTanks') !== -1) {
          let newState = { hidden: this.hidden };
          newState = newState.hidden.filter(
            btn => btn !== 'lilTanks' && btn !== 'DITL' && btn !== 'IMDB'
          );
          this.setState({ hidden: newState });

          //hide all
        } else {
          this.setState({ hidden: this.hidden });
        }
        return;

      case 'resume':
        this.setState({ hidden: this.hidden });

        return;

      case 'projects':
        //
        //show Jobly
        if (this.state.hidden.indexOf('jobly') !== -1) {
          let newState = { hidden: this.hidden };
          newState = newState.hidden.filter(btn => btn !== 'jobly');
          this.setState({ hidden: newState });

          //hide all
        } else {
          this.setState({ hidden: this.hidden });
        }
        return;

      case 'algorithms':
        //
        //show flood fill, spiral, and leveret
        if (this.state.hidden.indexOf('floodFill') !== -1) {
          let newState = { hidden: this.hidden };
          newState = newState.hidden.filter(
            btn => btn !== 'floodFill' && btn !== 'spiral' && btn !== 'leveret'
          );
          this.setState({ hidden: newState });

          //hide all
        } else {
          this.setState({ hidden: this.hidden });
        }
        return;

      case 'connect':
        this.setState({ hidden: this.hidden });

        return;

      case 'contact':
        this.setState({ hidden: this.hidden });

        return;

      default:
        return;
    }
  }

  render() {
    //
    //filter out hidden buttons
    const showBtns = this.sideBarBtns.filter(
      btn => this.state.hidden.indexOf(btn.name) === -1
    );

    //split up into primary and secondary
    let primaryBtns = [];
    let secondaryBtns = [];
    showBtns.map(btn => {
      if (btn.pos === 'primary') return primaryBtns.push(btn);
      else return secondaryBtns.push(btn);
    });

    return (
      <div className="SideBar-border">
        <div className="SideBar-cont">
          {this.sideBarBtns.map(btn => (
            <button
              className={`SideBar-button-${btn.name} SideBar-button ${btn.pos}`}
              onClick={this.handleClick}
              name={btn.name}
              key={btn.name}
            >
              {btn.val}
            </button>
          ))}

          {/* <div className="SideBar-primary-cont">
            {primaryBtns.map(btn => (
              <button
                className={`SideBar-button-${btn.name} SideBar-button ${
                  btn.pos
                }`}
                onClick={this.handleClick}
                name={btn.name}
                key={btn.name}
              >
                {btn.val}
              </button>
            ))}
          </div>

          
          <div className="SideBar-secondary-cont">
            {secondaryBtns.map(btn => (
              <button
                className={`SideBar-button-${btn.name} SideBar-button ${
                  btn.pos
                }`}
                onClick={this.handleClick}
                name={btn.name}
                key={btn.name}
              >
                {btn.val}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}
