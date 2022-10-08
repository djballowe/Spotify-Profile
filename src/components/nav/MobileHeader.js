import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    highlightPage();
  });

  return (
    <div className="mobile-nav-container">
      <div
        className="nav-mobiles"
        style={{
          color: page === "/" ? "white" : "rgb(164, 164, 164)",
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/" ? "visible" : "hidden",
            opacity: page === "/" ? "1" : "0",
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
        style={{
          color: page === "/artists" ? "white" : "rgb(164, 164, 164)",
        }}
        onClick={() => {
          navigate("artists");
          highlightPage();
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/artists" ? "visible" : "hidden",
            opacity: page === "/artists" ? "1" : "0",
          }}
        ></div>
        <Artist path={mdiAccountMusicOutline} size={1.4} />
        <p>Top Artist</p>
      </div>
      <div
        className="nav-mobiles"
        style={{
          color: page === "/tracks" ? "white" : "rgb(164, 164, 164)",
        }}
        onClick={() => {
          navigate("tracks");
          highlightPage();
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/tracks" ? "visible" : "hidden",
            opacity: page === "/tracks" ? "1" : "0",
          }}
        ></div>
        <List path={mdiPlaylistMusicOutline} size={1.4} />
        <p>Top Tracks</p>
      </div>
      <div
        className="nav-mobiles"
        style={{
          color: page === "/recent" ? "white" : "rgb(164, 164, 164)",
        }}
        onClick={() => {
          navigate("recent");
          highlightPage();
        }}
      >
        <div
          className="highlight"
          style={{
            visibility: page === "/recent" ? "visible" : "hidden",
            opacity: page === "/recent" ? "1" : "0",
          }}
        ></div>
        <Clock path={mdiClockOutline} size={1.4} />
        <p>Recent</p>
      </div>
    </div>
  );
};

export default MobileHeader;
