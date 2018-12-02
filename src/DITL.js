import React, { Component } from 'react';
import theoFoot from './theo_foot.jpg';

export default class DITL extends Component {
  render() {
    return (
      <div className={`content-cont DITL-cont`}>
        <p>
          When I was working on Lil Tanks, I made a day in the life post that
          went viral on Imgur.com. You can see it here:
        </p>
        <a href="https://imgur.com/a/ZMZOU">DITL of an Indie Dev</a>
        <img
          src={theoFoot}
          alt="My son in the morning. Such a cutie patootie."
          className="content-img"
        />
      </div>
    );
  }
}
