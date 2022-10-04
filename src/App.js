import Login from "./components/login/Login";
import Header from "./components/nav/Header";
import Profile from "./components/Profile-Main/Profile";
import "./App.css";
import MobileHeader from "./components/nav/MobileHeader";
import Artists from "./components/Profile-Main/Artists";
import Home from "./components/Home/Home";
import TopArtists from "./components/Top Artists/TopArtists";
import TopTracks from "./components/Top Tracks/TopTracks";
import TrackDetails from "./components/Details/TrackDetails";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Login /> */}
      <MobileHeader />
      {/* <Home /> */}
      {/* <TopArtists /> */}
      {/* <TopTracks /> */}
      <TrackDetails />
    </div>
  );
}

export default App;
