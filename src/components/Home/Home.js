import React, { useContext } from "react";
import Artists from "../Profile-Main/Artists";
import Profile from "../Profile-Main/Profile";
import Songs from "../Profile-Main/Songs";
import { AuthContext } from "../../App";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const codeTest = useContext(AuthContext);
  const token = useAuth(codeTest);
  console.log(token);

  return (
    <div className="home-container">
      <Profile />
      <div className="home-content-container">
        <Artists />
        <Songs />
      </div>
    </div>
  );
};

export default Home;
