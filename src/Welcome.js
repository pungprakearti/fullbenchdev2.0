import React, { Component } from 'react';
import myImg from './headshot_in_my_favorite_shirt-hey_why_are_you_reading_this-also_dont_be_alarmed_if_i_interview_in_this_shirt-tis_my_favorite_shirt-hence_the_file_name.jpg';

import './Welcome.scss';

export default class Welcome extends Component {
  render() {
    return (
      <div className={`content-cont Welcome-cont`}>
        <p>
          Hi, I'm Andrew and I'm currently attending Rithm School as part of its
          eighth cohort. I'm working hard everyday to become the full stack
          developer you're looking for. Keeping clicking on these buttons to
          learn more about me.
        </p>
        <img
          className="content-img"
          src={myImg}
          alt="A super handsome man. So handsome. Also humble."
        />
      </div>
    );
  }
}
