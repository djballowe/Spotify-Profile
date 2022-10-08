import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Header from "./components/nav/Header";
import Profile from "./components/Profile-Main/Profile";
import MobileHeader from "./components/nav/MobileHeader";
import Artists from "./components/Profile-Main/Artists";
import Home from "./components/Home/Home";
import TopArtists from "./components/Top Artists/TopArtists";
import TopTracks from "./components/Top Tracks/TopTracks";
import TrackDetails from "./components/Details/TrackDetails";
import Recent from "./components/Recent/Recent";

function App() {
  return (
    <div className="App">
      <MobileHeader />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artists" element={<TopArtists />} />
        <Route path="/tracks" element={<TopTracks />} />
        <Route path="/track/:id" element={<TrackDetails />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </div>
  );
}

export default App;
