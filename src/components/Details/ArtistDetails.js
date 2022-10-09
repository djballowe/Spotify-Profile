import React from "react";

const ArtistDetails = () => {
  return (
    <div>
      <div className="artist-detail-container">
        <div className="artist-detail-banner">
          {/* <img src="" alt="" /> */}
          <div className="artist-detail-cover"></div>
          <p>Artist Name</p>
        </div>
        <div className="artist-detail-detail-container">
          <div className="artist-details">
            <p>FOLLOWERS</p>
            <p>1,000,000</p>
          </div>
          <div className="artist-details">
            <p>GENRES</p>
            <p>Artist Genre</p>
          </div>
          <div className="artist-details">
            <p>POPULARITY</p>
            <p>70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
