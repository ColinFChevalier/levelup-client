import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [games, setGames, gameTypes, setTypes] = useState([]);

  const getGames = () => {
    return fetch("http://localhost:8000/games", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setGames);
  };

  const createGame = (newGame) => {
    return fetch("http://localhost:8000/games/new", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGame)
    })
    .then((response) => response.json())
    .then(createGame);
  };
  
  const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
    .then((response) => response.json())
    .then(getGameTypes);
  };

  return (
    <GameContext.Provider value={{ games, getGames, createGame, getGameTypes }}>
      {props.children}
    </GameContext.Provider>
  );
};