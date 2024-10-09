import React from "react";

export default function SearchBar({ searchPlayer, setSearchPlayer, onSearch }) {
  const searchSubmit = () => {
    onSearch(searchPlayer);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchPlayer}
        onChange={(event) => setSearchPlayer(event.target.value)}
        className="search-bar"
      />
      <button onClick={searchSubmit}>Search</button>
    </div>
  );
}
