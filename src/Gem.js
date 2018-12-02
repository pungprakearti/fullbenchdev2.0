import React, { Component } from 'react';
import { FaGem } from 'react-icons/fa';
import './Gem.scss';

export default class Gem extends Component {
  render() {
    return <FaGem className={`Gem-${this.props.color}`} />;
  }
}
