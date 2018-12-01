import React, { Component } from 'react';
import './Section.scss';

export default class Section extends Component {
  render() {
    return (
      <div className="Section-cont">
        <div className={`Section-${this.props.name}`}>
          <div className="Section-body">
            <div className="Section-title">{this.props.name}</div>
          </div>
        </div>
      </div>
    );
  }
}
