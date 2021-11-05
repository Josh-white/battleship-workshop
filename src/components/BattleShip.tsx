import React, {useState} from "react";
import battleshipLogo from "../assets/battleshipLogo.png"
import "./Battleship.css"
import {Game} from "./Game";

export const BattleShip = () => {

  const [playingGame, setPlayingGame] = useState(false)

  function handleClick() {
    setPlayingGame(true)
  }


  return (playingGame ?
      <Game/> :
      <div className="background">
        <img src={battleshipLogo} alt="battleship logo" className="logo"/>
        <div className="button_container">
          <button aria-label="One Player" onClick={handleClick}>One Player</button>
        </div>
      </div>
  )
}