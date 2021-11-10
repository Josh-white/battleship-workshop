import React from "react";
import {BattleShip} from "../components/BattleShip";
import {fireEvent,render, screen} from "@testing-library/react";


describe('Battleship', () => {
  it('should contain a background image', () => {
    render(<BattleShip/>)
    expect(screen.getByRole('img', {name: 'battleship logo'})).toBeVisible()
  })

  it('should contain a button to select single player',  () => {
    render(<BattleShip/>)

    expect(screen.getByRole('button', {name: /One Player/i})).toBeVisible()
  });

  it('should render a different page when one player button is clicked',  () => {
    render(<BattleShip/>)

    fireEvent.click(screen.getByRole('button', {name: /one player/i}))

    expect(screen.queryByRole('button', {name:/one player/i})).not.toBeInTheDocument()
    expect(screen.getByText('make me a game')).toBeVisible()
  });

})