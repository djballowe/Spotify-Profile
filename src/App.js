import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Header from "./components/nav/Header";
import MobileHeader from "./components/nav/MobileHeader";
import Home from "./components/Home/Home";
import TopArtists from "./components/Top Artists/TopArtists";
import TopTracks from "./components/Top Tracks/TopTracks";
import TrackDetails from "./components/Details/TrackDetails";
import Recent from "./components/Recent/Recent";
import ArtistDetails from "./components/Details/ArtistDetails";

function App() {
  return (
    <div className="App">
      <MobileHeader />
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artists" element={<TopArtists />} />
          <Route path='/artists/:id' element={<ArtistDetails />} />
          <Route path="/tracks" element={<TopTracks />} />
          <Route path="/track/:id" element={<TrackDetails />} />
          <Route path="/recent" element={<Recent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
