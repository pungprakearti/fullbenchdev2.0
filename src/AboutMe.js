import React, { Component } from 'react';
import family from './family.jpg';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="content-cont AboutMe-cont">
        <p>
          I'm half of Lead Money Games, an independent game development company.
          On June 15, 2016 we were funded through Kickstarter and on April 4,
          2017 we launched our first game on Steam called "Lil Tanks." It's a
          little shoot 'em up game that was purely engineered through trial and
          error and lots of online tutorials.
        </p>

        <p>
          After a few years of game development, I decided it's time for me to
          throw myself into full fledged software engineering. I've always loved
          the intersection of computers and art and I'm excited to see where
          this takes me.
        </p>

        <p>
          I also freelance as a digital effects artist having worked on over
          forty films. This is a vestige of my former life working in the film
          industry for 10 years.
        </p>

        <p>
          In my free time, you can usually find me on a hockey rink. I play ice
          and roller hockey all over the Bay Area and Sonoma County. If I can
          continue to pay league fees, I am happy.
        </p>

        <p>
          My family life consists of my amazing wife Samantha, and my two
          adorable children: Theo and Violet.
          <img src={family} alt="Mi familia" className="content-img" />
        </p>
      </div>
    );
  }
}
