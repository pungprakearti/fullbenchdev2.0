import React, { Component } from 'react';
import { FaGem } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

import './Section.scss';

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.progress = 0;
  }

  handleClick(evt) {
    let element = document.getElementById(this.props.name).childNodes[0]
      .childNodes[1].classList;

    switch (this.progress) {
      case 0:
        element.add('Section-bar30');
        this.progress++;
        return;
      case 1:
        element.add('Section-bar60');
        this.progress++;
        return;
      case 2:
        element.add('Section-bar100');
        setTimeout(() => {
          element.remove('Section-bar30');
          element.remove('Section-bar60');
          element.remove('Section-bar100');
          this.progress = 0;
          return;
        }, 200);
        this.progress++;
        return;
      default:
        return;
    }
  }

  render() {
    return (
      <div
        className="Section-cont"
        id={this.props.name}
        onClick={this.handleClick}
      >
        <div className={`Section-${this.props.name}`}>
          <div className="Section-body">
            <div className="Section-title">{this.props.name}</div>
            <div className="Section-fee">
              <FaLock style={{ color: 'lightgreen' }} />
            </div>
            <div className="Section-reward">
              <FaGem style={{ color: 'skyblue' }} />
            </div>
          </div>
          <div className="Section-bar" />
        </div>
      </div>
    );
  }
}
