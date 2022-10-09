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

const code = new URLSearchParams(window.location.search).get("code");

export const AuthContext = React.createContext();

function App() {
  return code ? (
    <AuthContext.Provider value={code}>
      <div className="App">
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
    </AuthContext.Provider>
  ) : (
    <Login />
  );
}

export default App;
