import React, { useState } from "react";

export const GameTypeContext = React.createContext();

const [gameTypes, setTypes] = useState([]);

const createGame = (game) => {
    return fetch("http://localhost:8000/gametypes", {}).then().then();
  };
  
  const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", {}).then().then();
  };


// export const GameTypeProvider = (props) => {
//   const [games, setGameTypes] = useState([]);

//   const getGameTypes = () => {
//     return fetch("http://localhost:8000/gametypes", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("lu_token")}`,
//       },
//     })
//       .then((response) => response.json())
//       .then(setGameTypes);
//   };

//   return (
//     <GameTypeContext.Provider value={{ games, getGameTypes }}>
//       {props.children}
//     </GameTypeContext.Provider>
//   );
// };