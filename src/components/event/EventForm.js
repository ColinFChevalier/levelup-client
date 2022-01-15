import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EventContext } from "./EventProvider.js"
import { GameContext } from "../game/GameProvider";

export const EventForm = () => {
    const history = useHistory();
    const { createEvent, getEvents } = useContext(EventContext)
    const { getGames, games } = useContext(GameContext)
    const [currentEvent, setEvent] = useState({
        title: 0,
        description: "",
        date: "",
        time: ""
    });

    useEffect(() => {
        getGames();
    }, []);

    const changeEventGameState = (domEvent) => {
        const newGameState = { ...currentEvent };
        newGameState.game= domEvent.target.value;
        setEvent(newGameState)
    };

    const changeEventDescriptionState = (domEvent) => {
        const newEventDescriptionState = { ...currentEvent };
        newEventDescriptionState.description = domEvent.target.value;
        setEvent(newEventDescriptionState)
    };

    const changeEventDateState = (domEvent) => {
        const newEventDateState = { ...currentEvent };
        newEventDateState.date = domEvent.target.value;
        setEvent(newEventDateState)
    };

    const changeEventTimeState = (domEvent) => {
        const newEventTimeState = { ...currentEvent };
        newEventTimeState.time = domEvent.target.value;
        setEvent(newEventTimeState)
    };

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select
                        name="gameId"
                        className="form-control"
                        value={currentEvent.gameId}
                        onChange={changeEventGameState}
                    >
                        <option value="0">Select a game...</option>
                        {games.map((game) => (
                            <option
                                key={game.id}
                                value={game.id}
                            >
                                {game.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="gameId">Description: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={currentEvent.description}
                        onChange={changeEventDescriptionState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gameId">Date: </label>
                    <input
                        type="date"
                        name="date"
                        required
                        autoFocus
                        className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventDateState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gameId">Time: </label>
                    <input
                        type="time"
                        name="time"
                        required
                        autoFocus
                        className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventTimeState}
                    />
                </div>
            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    const event = {
                        game: parseInt(currentEvent.game),
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time

                    }
                    createEvent(event).then(() => history.push("/events"));
                }}
                className="btn btn-primary"
            >
                Create Event
            </button>
        </form>
    );
};