import React from "react";
import spotify from "../../images/spotify-logo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="log">
        <div className="profile">
          <img src={spotify} alt="" />
          <p>Spotify Profile</p>
        </div>
        <button>LOG INTO SPOTIFY</button>
      </div>
    </div>
  );
};

export default Login;
