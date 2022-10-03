import React from "react";

const Songs = () => {
  return (
    <div className="top-songs-container">
      <div className="top-songs-title">
        <p>Top Songs of All Time</p>
        <button>Details</button>
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
