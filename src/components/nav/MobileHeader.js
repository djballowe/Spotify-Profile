import React from "react";
import Home from "@mdi/react";
import { mdiHomeVariantOutline } from "@mdi/js";
import Artist from "@mdi/react";
import { mdiAccountMusicOutline } from "@mdi/js";
import List from "@mdi/react";
import { mdiPlaylistMusicOutline } from "@mdi/js";
import Clock from "@mdi/react";
import { mdiClockOutline } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  let navigate = useNavigate();

  return (
    <div className="mobile-nav-container">
      <div className="highlight"></div>
      <div className="nav-mobiles" id="home">
        <Home
          path={mdiHomeVariantOutline}
          size={1.4}
          onClick={() => {
            navigate("/");
          }}
        />
        <p>Home</p>
      </div>
      <div
        className="nav-mobiles"
        id="artists"
        onClick={() => {
          navigate("artists");
        }}
      >
        <Artist path={mdiAccountMusicOutline} size={1.4} />
        <p>Top Artist</p>
      </div>
      <div
        className="nav-mobiles"
        id="tracks"
        onClick={() => {
          navigate("tracks");
        }}
      >
        <List path={mdiPlaylistMusicOutline} size={1.4} />
        <p>Top Tracks</p>
      </div>
      <div
        className="nav-mobiles"
        id="recent"
        onClick={() => {
          navigate("recent");
        }}
      >
        <Clock path={mdiClockOutline} size={1.4} />
        <p>Recent</p>
      </div>
    </div>
  );
};

export default MobileHeader;
