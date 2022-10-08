import React from "react";
import spotify from "../../images/spotify-logo.png";
import Home from "@mdi/react";
import { mdiHomeVariantOutline } from "@mdi/js";
import Artist from "@mdi/react";
import { mdiAccountMusicOutline } from "@mdi/js";
import List from "@mdi/react";
import { mdiPlaylistMusicOutline } from "@mdi/js";
import Clock from "@mdi/react";
import { mdiClockOutline } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="header-container">
      <img src={spotify} alt="" />
      <ul className="nav-links">
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          <Home path={mdiHomeVariantOutline} size={1.4} /> Home
        </li>
        <li
          onClick={() => {
            navigate("artists");
          }}
        >
          {" "}
          <Artist path={mdiAccountMusicOutline} size={1.4} /> Top Artists
        </li>
        <li
          onClick={() => {
            navigate("tracks");
          }}
        >
          {" "}
          <List path={mdiPlaylistMusicOutline} size={1.4} /> Top Tracks
        </li>
        <li
          onClick={() => {
            navigate("recent");
          }}
        >
          {" "}
          <Clock path={mdiClockOutline} size={1.4} /> Top Tracks
        </li>
      </ul>
    </div>
  );
};

export default Header;
