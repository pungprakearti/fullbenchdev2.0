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
          <div className="PrintResume-right">
            <h3>Experience</h3>
            <div className="PrintResume-faneron">
              <h4>Front End Web Development Intern</h4>
              Faneron Inc.
              <br />
              November 2018 - present
              <br />
              <ul>
                <li>Refactored an existing production JAMstack code base.</li>
                <li>Fetched data from Contentful using GraphQL queries.</li>
                <li>
                  Used Gatsby and React Portals to create reusable components.
                </li>
                <li>Created dynamic visualizations from user data.</li>
                <li>
                  Used React to create styled components that matched design
                  mockups.
                </li>
              </ul>
            </div>
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
              DreamWorks Animation
              <br />
              July 2008 - February 2015
              <br />
              <ul>
                <li>Worked on over 30 motion pictures.</li>
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
                  Textured 3D assets and rendered using proprietary renderer.
                </li>
                <li>
                  Created, documented, and maintained several Python scripts and
                  Linux tutorials on DreamWorks' internal website.
                </li>
              </ul>
            </div>
          </div>
          <div className="PrintResume-middle" />
          <div className="PrintResume-left">
            <h3>Projects</h3>
            <div className="PrintResume-projects-cont">
              <a href="http://www.lipslut.com">www.lipslut.com</a>
              <ul className="PrintResume-lipslut">
                <li>JAMstack that utilizes Gatsby, React and GraphQL. </li>
              </ul>
              <a href="http://react-jobly.herokuapp.com/">
                react-jobly.herokuapp.com
              </a>
              <ul className="PrintResume-jobly">
                <li>React front end with Express back end.</li>
              </ul>
            </div>
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
                  <br />
                  Git
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
            <div className="PrintResume-aau">
              <h4>Academy of Art University</h4>
              Bachelor of Arts in Visual Effects
              <br />
              2002 - 2007
              <ul>
                <li>
                  Curriculum included compositing, matte painting, particles,
                  MEL scripting, editing, match moving, modeling, and animation.
                </li>
              </ul>
            </div>
            <h3>Contact</h3>
            <div className="PrintResume-contact">
              <a href="mailto:andrew.pungprakearti@gmail.com">
                andrew.pungprakearti@gmail.com
              </a>
              <br />
              (415) 868-5025
              <br />
              Rohnert Park, California
            </div>
          </div>
        </div>
      </div>
    );
  }
}
