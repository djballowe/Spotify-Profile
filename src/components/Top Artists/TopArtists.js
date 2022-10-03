import React from "react";

const TopArtists = () => {
  return (
    <div className="top-artist-page-container">
      <div className="top-artist-nav">
        <div className="top-artist-page-title">
          <p>Top Artists</p>
        </div>
        <div className="top-artist-filter">
          <p>All Time</p>
          <p>Last Week</p>
          <p>6 Months</p>
        </div>
      </div>
      <div className="artist-grid">
        <div className="artist-page">
          <div className="bio-pic"></div>
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
