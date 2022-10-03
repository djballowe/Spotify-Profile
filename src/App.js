import Login from "./components/login/Login";
import Header from "./components/nav/Header";
import Profile from "./components/Profile-Main/Profile";
import "./App.css";
import MobileHeader from "./components/nav/MobileHeader";
import Artists from "./components/Profile-Main/Artists";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Login /> */}
      <MobileHeader />
      <Home />
    </div>
  );
}

export default App;
