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

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MobileHeader /> */}
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
