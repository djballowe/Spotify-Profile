import React from "react";
import { useNavigate } from "react-router-dom";

const Songs = () => {
  let navigate = useNavigate();

  return (
    <div className="top-songs-container">
      <div className="top-songs-title">
        <p>Top Songs of All Time</p>
        <button
          onClick={() => {
            navigate("tracks");
          }}
        >
          Details
        </button>
      </div>
      <div className="top-songs-list-container">
        <div className="song">
          <div className="song-details-container">
            {/* <img src="" alt="" /> */}
            <div className="album-cover"></div>
            <div className="song-details">
              <p>Song Title</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="time">
            <p>3:02</p>
          </div>
        </div>
        <div className="song">
          <div className="song-details-container">
            {/* <img src="" alt="" /> */}
            <div className="album-cover"></div>
            <div className="song-details">
              <p>Song Title</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="time">
            <p>3:02</p>
          </div>
        </div>
        <div className="song">
          <div className="song-details-container">
            {/* <img src="" alt="" /> */}
            <div className="album-cover"></div>
            <div className="song-details">
              <p>Song Title</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="time">
            <p>3:02</p>
          </div>
        </div>
        <div className="song">
          <div className="song-details-container">
            {/* <img src="" alt="" /> */}
            <div className="album-cover"></div>
            <div className="song-details">
              <p>Song Title</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="time">
            <p>3:02</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
