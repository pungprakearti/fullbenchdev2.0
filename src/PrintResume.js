import React, { Component } from 'react';
import './PrintResume.css';

export default class PrintResume extends Component {
  render() {
    return (
      <div className="PrintResume-cont">
        <div className="PrintResume-top" />
        <div className="PrintResume-header">
          <div className="PrintResume-name">
            Andrew
            <br />
            Pungprakearti
          </div>
          <div className="PrintResume-title">Full Stack Developer</div>
        </div>
        <div className="PrintResume-body-cont">
          <div className="PrintResume-left">
            <h3>Summary</h3>
            <p className="PrintResume-p">
              I'm a hard working creative full stack developer that wants to
              build beautiful dynamic web applications for you. My extensive
              professional background has taught me to be detail oriented and
              able to consistently hit deadlines.
            </p>
            <h3>Skills</h3>
            <div className="PrintResume-skills-cont">
              <div className="PrintResume-skills-left">
                <p>
                  JavaScript
                  <br />
                  Python
                  <br />
                  CSS
                  <br />
                  SASS
                  <br />
                  JQuery
                  <br />
                  JSX
                  <br />
                </p>
              </div>
              <div className="PrintResume-skills-middle">
                <p>
                  React
                  <br />
                  Redux
                  <br />
                  Gatsby
                  <br />
                  Express
                  <br />
                  Flask
                  <br />
                  Node.js
                </p>
              </div>
              <div className="PrintResume-skills-right">
                <p>
                  PostgreSQL
                  <br />
                  SQLAlchemy
                  <br />
                  GraphQL
                </p>
              </div>
            </div>
            <h3>Education</h3>
            <h4>Rithm School</h4>
            Full Stack Web Development
            <br />
            2018 - 2019
            <ul>
              <li>
                Curriculum included JavaScript, Python, front and back end web
                development, single page applications, data structures, and
                complex algorithms.
              </li>
            </ul>
            <h4>Academy of Art University</h4>
            Bachelor of Arts in Visual Effects
            <br />
            2002 - 2007
            <ul>
              <li>
                Curriculum included compositing, matte painting, particles, MEL
                scripting, editing, match moving, modeling, and animation.
              </li>
            </ul>
            <h3>Contact</h3>
            <p>
              Mobile: (415) 868-5025
              <br />
              Email: Andrew.Pungprakearti@gmail.com
              <br />
              Address: Rohnert Park, California
            </p>
          </div>
          <div className="PrintResume-middle" />
          <div className="PrintResume-right">
            <h3>Experience</h3>
            <h4>Front End Web Development Intern</h4>
            Faneron Inc.
            <br />
            November 2018 - present
            <br />
            <ul>
              <li>Refactored an existing production Jamstack code base.</li>
              <li>Fetched data from Contentful using GraphQL queries.</li>
              <li>
                Used Gatsby and React Portals to create reusable components.
              </li>
              <li>
                Used React to create styled components that matched design
                mockups.
              </li>
            </ul>
            <div className="PrintResume-nimble">
              <h4>Digital Effects Artist</h4>
              Nimble Collective
              <br />
              October 2016 - August 2017
              <br />
              <ul>
                <li>
                  Used compositing techniques to fix rendering issues and added
                  effects to compliment story telling.
                </li>
                <li>Worked remotely using proprietary cloud based platform.</li>
              </ul>
            </div>
            <div className="PrintResume-pdi">
              <h4>Stereoscopic Image Finaling Lead / Surfacing Artist</h4>
              PDI/DreamWorks Animation
              <br />
              July 2008 - February 2015
              <br />
              <ul>
                <li>
                  Used compositing techniques, 3D projection, digital paint, and
                  articulated rotoscope to fix rendering errors and add polish
                  to shots.
                </li>
                <li>
                  Fixed stereoscopic issues that caused distracting and
                  nauseating effects when viewed.
                </li>
                <li>
                  Used proprietary node based compositing software, Nuke, After
                  Effects, Photoshop, and Mari.
                </li>
                <li>
                  Textured assets and rendered using proprietary renderer.
                </li>
                <li>
                  Created, documented, updated, and maintained several Python
                  scripts that are used in every shot of every show.
                </li>
                <li>
                  Created several scripting and Linux tutorials which are
                  documented on the DreamWorks internal website.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="PrintResume-bottom" />
      </div>
    );
  }
}
