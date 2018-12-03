import React, { Component } from 'react';
import { FaGem } from 'react-icons/fa';
import './Gem.scss';

export default class Gem extends Component {
  render() {
    console.log(this.props.name, this.props);
    return (
      <div className="Gem-cont">
        <FaGem className={`Gem-${this.props.color}`} />
        {this.props.auto ? (
          <div className={`Gem-circle-${this.props.color}`} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
