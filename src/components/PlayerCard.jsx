import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../API";
import { Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./SinglePlayer.jsx";

import NavBar from "./NavBar.jsx";

export default function PlayerCard({ player, isSingle, setPlayer }) {
  const navigate = useNavigate();

  const seeDetails = () => {
    navigate(`/players/${player.id}`);
  };

  const backButton = () => {
    navigate("/");
  };

  const removePlayer = async () => {
    await deletePlayer(player.id);
    setPlayer((prevState) =>
      prevState.filter((puppy) => puppy.id !== player.id)
    );
  };

  return (
    <div className="player-card">
      <h2 className="player-name">{player.name}</h2>
      <h3 className="player-breed">{player.breed}</h3>
      <img src={player.imageUrl} alt={player.name} />
      {isSingle ? (
        <button onClick={backButton} className="player-card-button">
          Go Back
        </button>
      ) : (
        <button onClick={seeDetails} className="player-card-button">
          See Details
        </button>
      )}
      {!isSingle && (
        <button onClick={removePlayer} className="player-card-button">
          Remove Player
        </button>
      )}
    </div>
  );
}
