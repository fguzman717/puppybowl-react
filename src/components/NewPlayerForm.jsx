import React from "react";
import { useState } from "react";
import { createPlayer } from "../API";

export default function NewPlayerForm({ setPlayer }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imgURL, setImgURL] = useState("");

  const formSubmit = async (event) => {
    event.preventDefault();
    const newPlayer = await createPlayer(name, breed, imgURL);

    setPlayer((prevState) => {
      return [...prevState, newPlayer];
    });

    setName("");
    setBreed("");
    setImgURL("");
  };

  return (
    <form onSubmit={formSubmit} className="player-form">
      <h2>Add New Player</h2>
      <div className="form-fields">
        <label htmlFor="name">Player Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter New Player's Name"
          required
        ></input>
      </div>
      <div className="form-fields">
        <label htmlFor="breed">Player Breed</label>
        <input
          type="text"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          placeholder="Enter New Player's Breed"
          required
        ></input>
      </div>
      <div className="form-fields">
        <label htmlFor="imgURL">Player Picture</label>
        <input
          type="text"
          value={imgURL}
          onChange={(event) => setImgURL(event.target.value)}
          placeholder="Enter URL of Player's Photo"
          required
        ></input>
      </div>
      <button type="submit" className="submit-button">
        Add Player
      </button>
    </form>
  );
}
