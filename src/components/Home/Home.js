import React from "react";
import { code } from "../../Spotify/SpotifyLogic";
import Artists from "../Profile-Main/Artists";
import Profile from "../Profile-Main/Profile";
import Songs from "../Profile-Main/Songs";
import useAuth from "../hooks/useAuth";

const Home = () => {

  return (
    <div className="home-container">
      <Profile />
      <div className="home-content-container">
        <Artists />
        <Songs />
      </div>
    </div>
  );
};

export default Home;
