import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventProvider } from "./event/EventProvider.js"
import { EventList } from "./event/EventList.js"
import { GameForm } from "./game/GameForm.js";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <GameProvider>
          <EventProvider>
            <GameProvider>

              <Route exact path="/games">
                <GameList />
              </Route>

              <Route exact path="/events">
                <EventList />
              </Route>

              <Route exact path="/games/new">
                <GameForm />
              </Route>
            </GameProvider>
          </EventProvider>
        </GameProvider>
      </main>
    </>
  );
};