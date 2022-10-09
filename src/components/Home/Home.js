import React from "react";
import Artists from "../Profile-Main/Artists";
import Profile from "../Profile-Main/Profile";
import Songs from "../Profile-Main/Songs";


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
