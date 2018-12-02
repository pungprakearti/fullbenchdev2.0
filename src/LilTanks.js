import React, { Component } from 'react';
import lilTanksImg from './lil_tanks_gameplay.gif';
import lilTanksImg2 from './lil_tanks_gameplay2.gif';

export default class LilTanks extends Component {
  render() {
    return (
      <div className="content-cont LilTanks-cont">
        <p>
          Lil Tanks is a throw back to old shmups like Gradius but with an
          RPG/leveling system twist. It features pixel art graphics and an
          amazing soundtrack. Check it out on SteamPowered.com here:
        </p>
        <a
          href="https://store.steampowered.com/app/495820/Lil_Tanks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lil Tanks
        </a>
        <img
          src={lilTanksImg}
          alt="Lil Tanks gameplay gif"
          className="content-img"
        />
        <img
          src={lilTanksImg2}
          alt="another Lil Tanks gameplay gif"
          className="content-img"
        />
      </div>
    );
  }
}
