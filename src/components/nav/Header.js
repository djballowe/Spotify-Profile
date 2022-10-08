import React, { useState, useEffect } from "react";
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
  const [page, setPage] = useState(window.location.pathname);

  const highlightPage = () => {
    const location = window.location.pathname;
    setPage(location);
  };

  useEffect(() => {
    highlightPage();
  });

  return (
    <div className="header-container">
      <img src={spotify} alt="" />
      <ul className="nav-links">
        <li
          onClick={() => {
            navigate("/");
            highlightPage();
          }}
          style={{
            color: page === "/" ? "white" : "rgb(71, 71, 71)",
          }}
        >
          <div
            className="highlight-desktop"
            style={{
              visibility: page === "/" ? "visible" : "hidden",
              opacity: page === "/" ? "1" : "0",
            }}
          ></div>
          <Home path={mdiHomeVariantOutline} size={1.4} /> Home
        </li>
        <li
          onClick={() => {
            navigate("artists");
            highlightPage();
          }}
          style={{
            color: page === "/artists" ? "white" : "rgb(71, 71, 71)",
          }}
        >
          {" "}
          <div
            className="highlight-desktop"
            style={{
              visibility: page === "/artists" ? "visible" : "hidden",
              opacity: page === "/artists" ? "1" : "0",
            }}
          ></div>
          <Artist path={mdiAccountMusicOutline} size={1.4} /> Top Artists
        </li>
        <li
          onClick={() => {
            navigate("tracks");
            highlightPage();
          }}
          style={{
            color: page === "/tracks" ? "white" : "rgb(71, 71, 71)",
          }}
        >
          {" "}
          <div
            className="highlight-desktop"
            style={{
              visibility: page === "/tracks" ? "visible" : "hidden",
              opacity: page === "/tracks" ? "1" : "0",
            }}
          ></div>
          <List path={mdiPlaylistMusicOutline} size={1.4} /> Top Tracks
        </li>
        <li
          onClick={() => {
            navigate("recent");
            highlightPage();
          }}
          style={{
            color: page === "/recent" ? "white" : "rgb(71, 71, 71)",
          }}
        >
          {" "}
          <div
            className="highlight-desktop"
            style={{
              visibility: page === "/recent" ? "visible" : "hidden",
              opacity: page === "/recent" ? "1" : "0",
            }}
          ></div>
          <Clock path={mdiClockOutline} size={1.4} /> Recent
        </li>
      </ul>
    </div>
  );
};

export default Header;
