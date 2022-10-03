import React from "react";

const Profile = () => {
  return (
    <div className="profile-info-container">
      <div className="main-info">
        {/* <img src="" alt="" /> */}
        <div className="image"></div>
        <p>Profile Name</p>
      </div>
      <div className="profile-stats-container">
        <div className="profile-stats">
          <p>FOLLOWERS</p>
          <p>12</p>
        </div>
        <div className="profile-stats">
          <p>FOLLOWING</p>
          <p>15</p>
        </div>
        <div className="profile-stats">
          <p>PLAYLISTS</p>
          <p>7</p>
        </div>
      </div>
      <div className="log-out">
        <button>LOGOUT</button>
      </div>
    </div>
  );
};

export default Profile;
