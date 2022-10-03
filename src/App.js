import Login from "./components/login/Login";
import Header from "./components/nav/Header";
import Profile from "./components/Profile/Profile";
import "./App.css";
import MobileHeader from "./components/nav/MobileHeader";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <MobileHeader />
      {/* <Login /> */}
      <Profile />
    </div>
  );
}

export default App;
