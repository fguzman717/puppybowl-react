import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePlayer } from "../API";
import PlayerCard from "./PlayerCard.jsx";

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePlayer = async (id) => {
      const singlePlayer = await getSinglePlayer(id);

      const individual = singlePlayer.data.player;

      setPlayer(individual);
    };
    fetchSinglePlayer(id);
  }, [id]);

  // If player is null, this will help mitigate breaking the page by displaying a loading message rather than trying to render the PlayerCard with a null
  if (!player) {
    return <h1>Loading....</h1>;
  }

  return <PlayerCard player={player} isSingle />;
}
