import React from "react";
import battleshipLogo from "./assets/battleshipLogo.png"
import {useHistory} from "react-router-dom";
import "./Battleship.css"
import {Routes} from "./Routes";

export const BattleShip = () => {
  let history = useHistory()

  function handleClick() {
    history.push(Routes.Game)
  }

  return (
    <div className="background">
      <img src={battleshipLogo} alt="battleship logo" className="logo"/>
      <div className="button_container">
        <button aria-label="One Player" onClick={handleClick}>One Player</button>
      </div>
    </div>
  )
}