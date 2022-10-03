import React from "react";
import Home from "@mdi/react";
import { mdiHomeVariantOutline } from "@mdi/js";
import Artist from "@mdi/react";
import { mdiAccountMusicOutline } from "@mdi/js";
import List from "@mdi/react";
import { mdiPlaylistMusicOutline } from "@mdi/js";

const MobileHeader = () => {
  return (
    <div className="mobile-nav-container">
      <div className="highlight"></div>
      <div className="nav-mobiles">
        <Home path={mdiHomeVariantOutline} size={1.4} />
        <p>Home</p>
      </div>
      <div className="nav-mobiles">
        <Artist path={mdiAccountMusicOutline} size={1.4} />
        <p>Top Artist</p>
      </div>
      <div className="nav-mobiles">
        <List path={mdiPlaylistMusicOutline} size={1.4} />
        <p>Top Tracks</p>
      </div>
    </div>
  );
};

export default MobileHeader;
