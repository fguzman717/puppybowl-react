import { useState, useEffect } from "react";
import { getAllPlayers } from "../API";
import PlayerCard from "./PlayerCard.jsx";
import NewPlayerForm from "./NewPlayerForm.jsx";
import SearchBar from "./SearchBar.jsx";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState("");
  const [filtered, setFiltered] = useState(players);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const players = await getAllPlayers();
      setPlayers(players);
      setFiltered(players);
    };
    fetchAllPlayers();
  }, []);

  const handleSearch = (playerName) => {
    const filteredPlayers = players.filter((playerName) =>
      playerName.name.toLowerCase().includes(searchPlayer.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <div>
      <NewPlayerForm setPlayer={setPlayers} />
      <SearchBar
        searchPlayer={searchPlayer}
        setSearchPlayer={setSearchPlayer}
        onSearch={handleSearch}
      />
      {players.map((player) => {
        return (
          <PlayerCard key={player.id} player={player} setPlayer={setPlayers} />
        );
      })}
    </div>
  );
}
