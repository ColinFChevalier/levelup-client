import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameProvider.js";
import { useHistory } from "react-router-dom";

export const GameForm = () => {
  const history = useHistory();
  const { createGame, getGameTypes, gameTypes } = useContext(GameContext);

  const [currentGame, setCurrentGame] = useState({
    skillLevel: 1,
    numberOfPlayers: 0,
    title: "",
    maker: "",
    gameTypeId: 0,
  });

  useEffect(() => {
    getGameTypes();
  }, []);

  const changeGameTitleState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.title = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGameMakerState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.maker = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGamePlayersState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.numberOfPlayers = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGameSkillLevelState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.skillLevel = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGameTypeState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.gameTypeId = event.target.value;
    setCurrentGame(newGameState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentGame.title}
            onChange={changeGameTitleState}
          />
          <label htmlFor="maker">Maker: </label>
          <input
            type="text"
            name="maker"
            required
            autoFocus
            className="form-control"
            value={currentGame.maker}
            onChange={changeGameMakerState}
          />
          <label htmlFor="playercount">Playercount: </label>
          <input
            type="number"
            name="playercount"
            required
            autoFocus
            className="form-control"
            value={currentGame.numberOfPlayers}
            onChange={changeGamePlayersState}
          />
          <label htmlFor="skill-level">Skill Level: </label>
          <input
            type="number"
            name="skillLevel"
            required
            autoFocus
            className="form-control"
            value={currentGame.skillLevel}
            onChange={changeGameSkillLevelState}
          />
          <label htmlFor="gametype">Game Type: </label>
          <input
            type="number"
            name="gametype"
            required
            autoFocus
            className="form-control"
            value={currentGame.gameTypeId}
            onChange={changeGameTypeState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const game = {
            maker: currentGame.maker,
            title: currentGame.title,
            numberOfPlayers: parseInt(currentGame.numberOfPlayers),
            skillLevel: parseInt(currentGame.skillLevel),
            gameTypeId: parseInt(currentGame.gameTypeId),
          };

          createGame(game).then(() => history.push("/games"));
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
  );
};