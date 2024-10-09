import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="welcome">Welcome to the Puppy Bowl!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />\
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
