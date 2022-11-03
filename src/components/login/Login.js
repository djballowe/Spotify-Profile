import React from "react";
import spotify from "../../images/spotify-logo.png";
import { spotifyAuth } from "../../Spotify/SpotifyLogic";

const Login = () => {
  return (
    <div className="login-container">
      <div className="log">
        <div className="profile">
          <img src={spotify} alt="" />
          <p>Spotify Buddy</p>
        </div>
        <a href={spotifyAuth}>LOG IN WITH SPOTIFY</a>
      </div>
    </div>
  );
};

export default Login;
