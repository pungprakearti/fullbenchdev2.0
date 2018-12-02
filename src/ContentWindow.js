import React, { Component } from 'react';
import './ContentWindow.scss';

export default class ContentWindow extends Component {
  render() {
    return <div className="ContentWindow-cont">{this.props.content}</div>;
  }
}
