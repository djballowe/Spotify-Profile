import React from "react";
import { useNavigate } from "react-router-dom";

const Artists = () => {
  let navigate = useNavigate();

  return (
    <div className="top-artists-container">
      <div className="top-artist-title">
        <p>Top Artists of All Time</p>
        <button
          onClick={() => {
            navigate("artists");
          }}
        >
          Details
        </button>
      </div>
      <div className="top-artist-list">
        <div className="artist">
          {/* <img src="" alt="" /> */}
          <div className="artist-pic"></div>
          <p>Artist Name</p>
        </div>
        <div className="artist">
          {/* <img src="" alt="" /> */}
          <div className="artist-pic"></div>
          <p>Artist Name</p>
        </div>
        <div className="artist">
          {/* <img src="" alt="" /> */}
          <div className="artist-pic"></div>
          <p>Artist Name</p>
        </div>
        <div className="artist">
          {/* <img src="" alt="" /> */}
          <div className="artist-pic"></div>
          <p>Artist Name</p>
        </div>
        <div className="artist">
          {/* <img src="" alt="" /> */}
          <div className="artist-pic"></div>
          <p>Artist Name</p>
        </div>
      </div>
    </div>
  );
};

export default Artists;
