import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EventContext } from "./EventProvider.js";

export const EventList = (props) => {
  const { events, getEvents, joinEvent } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory()

  return (
    <article className="events">
      <header className="events__header">
        <h1>Level Up Game Events</h1>
      </header>
      <button
        className="btn btn-2 btn-sep icon-create"
        onClick={() => {
          history.push({ pathname: "/events/new" });
        }}>
        Register New Event
      </button>
      {events.map((event) => {
        return (
          <section key={event.id} className="registration">
            <div className="registration__game">{event.game.title}</div>
            <div>{event.description}</div>
            <div>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              @ {event.time}
            </div>
            <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
        Join
      </button>
          </section>
        );
      })}
    </article>
  );
};