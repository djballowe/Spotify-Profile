import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Header from "./components/nav/Header";
import MobileHeader from "./components/nav/MobileHeader";
import Home from "./components/Home/Home";
import TopArtists from "./components/Top Artists/TopArtists";
import TopTracks from "./components/Top Tracks/TopTracks";
import TrackDetails from "./components/Details/TrackDetails";
import Recent from "./components/Recent/Recent";
import ArtistDetails from "./components/Details/ArtistDetails";
import { code } from "./Spotify/SpotifyLogic";
import useAuth from "./components/hooks/useAuth";

// const token = JSON.parse(localStorage.getItem("access_token"));

const App = () => {
  useAuth(code);
  const token = localStorage.getItem("access_token");
  console.log(token);

  return code ? (
    <div className="App">
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          console.log(localStorage);
        }}
      >
        Print
      </button>
      <MobileHeader />
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<TopArtists />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/tracks" element={<TopTracks />} />
          <Route path="/track/:id" element={<TrackDetails />} />
          <Route path="/recent" element={<Recent />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Storage
      </button>
      <button
        onClick={() => {
          console.log(localStorage);
        }}
      >
        Print
      </button>
      <Login />
    </div>
  );
};

export default App;
