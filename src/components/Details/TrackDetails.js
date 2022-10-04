import React from "react";

const TrackDetails = () => {
  return (
    <div className="song_details_container">
      <div className="song_details">
        <div className="song_title">
          {/* <img src="" alt="" /> */}
          <div className="album_cover"></div>
          <p>Song Name</p>
          <p>Artist</p>
        </div>
        <div className="album_year">
          <p>Album</p>
          <div className="divider"></div>
          <p>Year</p>
        </div>
        <button>PLAY ON SPOTIFY</button>
      </div>
    </div>
  );
};

export default TrackDetails;
