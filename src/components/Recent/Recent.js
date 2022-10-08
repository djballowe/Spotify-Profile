import React from "react";

const Recent = () => {
  return (
    <div className="recent-tracks-container">
      <div className="recent-tracks-title">
        <p>Recently Played Tracks</p>
      </div>
      <div className="top-tracks-list">
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

export default Recent;
