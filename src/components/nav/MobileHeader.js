import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "@mdi/react";
import { mdiHomeVariantOutline } from "@mdi/js";
import Artist from "@mdi/react";
import { mdiAccountMusicOutline } from "@mdi/js";
import List from "@mdi/react";
import { mdiPlaylistMusicOutline } from "@mdi/js";
import Clock from "@mdi/react";
import { mdiClockOutline } from "@mdi/js";

const MobileHeader = () => {
  let navigate = useNavigate();
  const [page, setPage] = useState(window.location.pathname);

  const highlightPage = () => {
    const location = window.location.pathname;
    setPage(location);
  };

  return (
    <div className="mobile-nav-container">
      <div className="nav-mobiles">
        <div
          className="highlight"
          style={{
            visibility: page === "/" ? "visible" : "hidden",
          }}
        ></div>
        <Home
          path={mdiHomeVariantOutline}
          size={1.4}
          onClick={() => {
            navigate("/");
            highlightPage();
          }}
        />
        <p>Home</p>
      </div>
      <div
        className="nav-mobiles"
        onClick={() => {
          navigate("artists");
          highlightPage();
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/artists" ? "visible" : "hidden",
          }}
        ></div>
        <Artist path={mdiAccountMusicOutline} size={1.4} />
        <p>Top Artist</p>
      </div>
      <div
        className="nav-mobiles"
        onClick={() => {
          navigate("tracks");
          highlightPage();
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/tracks" ? "visible" : "hidden",
          }}
        ></div>
        <List path={mdiPlaylistMusicOutline} size={1.4} />
        <p>Top Tracks</p>
      </div>
      <div
        className="nav-mobiles"
        onClick={() => {
          navigate("recent");
          highlightPage();
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/recent" ? "visible" : "hidden",
          }}
        ></div>
        <Clock path={mdiClockOutline} size={1.4} />
        <p>Recent</p>
      </div>
    </div>
  );
};

export default MobileHeader;
