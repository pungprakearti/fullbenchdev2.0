import React, { Component } from 'react';

export default class IMDB extends Component {
  render() {
    return (
      <div className={`content-cont IMDB-cont`}>
        <p>
          I've been working in motion pictures for over 10 years. I loved it,
          but after my studio was shut down and having to hop from one job to
          the next, I decided that I wanted more stability.
        </p>
        <p>
          With the decade of experience though, I've learned how to work in a
          professional environment while completing my work under tight
          deadlines.
        </p>
        <p>
          Check out my IMDB page. I've got tons of credits. Credits as far as
          the eye can see...
        </p>
        <a
          href="https://www.imdb.com/name/nm3117059/?ref_=fn_al_nm_1"
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDB
        </a>
      </div>
    );
  }
}
