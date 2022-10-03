import React from "react";
import spotify from "../../images/spotify-logo.png";
import Home from "@mdi/react";
import { mdiHomeVariantOutline } from "@mdi/js";
import Artist from "@mdi/react";
import { mdiAccountMusicOutline } from "@mdi/js";
import List from "@mdi/react";
import { mdiPlaylistMusicOutline } from "@mdi/js";

const Header = () => {
  return (
    <div className="header-container">
      <img src={spotify} alt="" />
      <ul className="nav-links">
        <li>
          <Home path={mdiHomeVariantOutline} size={1.7} /> Home
        </li>
        <li>
          {" "}
          <Artist path={mdiAccountMusicOutline} size={1.7} /> Top Artists
        </li>
        <li>
          {" "}
          <List path={mdiPlaylistMusicOutline} size={1.7} /> Top Tracks
        </li>
      </ul>
    </div>
  );
};

export default Header;
